# Plano de Implementação — Backend dos Formulários com Resend

## Diagnóstico Atual

O site Singularis Travel (Next.js 16 com App Router) possui **4 formulários** que coletam dados mas **não enviam para nenhum lugar**. Todos os `onSubmit` simulam envio com `setTimeout` e mostram sucesso falso.

**Formulários existentes:**

| Componente | Campos | Localização |
|---|---|---|
| `ContactForm.tsx` | nome, email, mensagem | Página `/contato` |
| `CorporateForm.tsx` | nome, sobrenome, empresa, email, telefone, produtos[], mensagem | Modal em `/servicos/corporate` |
| `MiceForm.tsx` | nome, sobrenome, cargo, empresa, email, telefone, serviços[], mensagem | Modal em `/servicos/mice` |
| `LeisureForm.tsx` | nome, sobrenome, email, telefone, assunto, mensagem | Modal em `/servicos/lazer` |

**O que falta:**
- Nenhuma pasta `app/api/` existe
- Nenhuma integração de email
- Nenhuma validação server-side

---

## Estrutura Final de Diretórios

```
site-singularis/
├── app/
│   ├── api/
│   │   ├── emails/                    ← NOVO (templates)
│   │   │   ├── contact-email.tsx
│   │   │   ├── corporate-email.tsx
│   │   │   ├── mice-email.tsx
│   │   │   ├── leisure-email.tsx
│   │   │   └── confirmation-email.tsx
│   │   └── forms/                     ← NOVO (endpoints)
│   │       ├── contact/route.ts
│   │       ├── corporate/route.ts
│   │       ├── mice/route.ts
│   │       └── leisure/route.ts
│   └── lib/                           ← NOVO (utilitários)
│       ├── rate-limit.ts
│       ├── validation.ts
│       └── useFormSubmit.ts
├── components/
│   └── modals/
│       ├── ContactForm.tsx            ← ATUALIZAR
│       ├── CorporateForm.tsx          ← ATUALIZAR
│       ├── MiceForm.tsx               ← ATUALIZAR
│       └── LeisureForm.tsx            ← ATUALIZAR
├── .env.local                         ← NOVO (não comitar!)
├── .env.example                       ← NOVO (referência)
└── package.json                       ← ATUALIZAR
```

---

## Fase 1 — Instalar Dependências

```bash
npm install resend @react-email/components
```

- **resend** — Cliente oficial do Resend para envio de emails via API
- **@react-email/components** — Componentes React para templates de email (Html, Head, Body, Text, etc.)

---

## Fase 2 — Configurar Variáveis de Ambiente

### Criar `.env.local`

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
FORM_RECIPIENT_EMAIL=bernardo.barbosa@singularis.tur.br
```

### Criar `.env.example` (para referência no Git)

```env
RESEND_API_KEY=your_resend_api_key_here
FORM_RECIPIENT_EMAIL=bernardo.barbosa@singularis.tur.br
```

### Verificar `.gitignore`

Confirmar que `.env.local` está listado (já está no padrão do Next.js).

### Como obter a chave API:
1. Acesse https://resend.com e crie uma conta gratuita
2. Vá em **API Keys** → **Create API Key**
3. Copie a chave e cole no `.env.local`
4. No Resend, vá em **Domains** → Adicione e verifique `singularis.tur.br`
   - Enquanto o domínio não for verificado, use `onboarding@resend.dev` como remetente

---

## Fase 3 — Criar Templates de Email

Cada formulário terá um template React dedicado + 1 template de confirmação para o usuário.

### Template de Contato (`app/api/emails/contact-email.tsx`)

Recebe: `name`, `email`, `message`
Exibe formatado com labels estilizados no padrão Singularis (cores terra/dourado).

### Template Corporativo (`app/api/emails/corporate-email.tsx`)

Recebe: `firstName`, `lastName`, `company`, `email`, `phone`, `produtos[]`, `message?`
Exibe lista de produtos de interesse como itens separados por vírgula.

### Template MICE (`app/api/emails/mice-email.tsx`)

Recebe: `firstName`, `lastName`, `cargo`, `company`, `email`, `phone`, `servicos[]`, `message?`
Inclui cargo e empresa com destaque.

### Template Lazer (`app/api/emails/leisure-email.tsx`)

Recebe: `firstName`, `lastName`, `email`, `phone`, `subject`, `message`
Layout mais leve, focado na mensagem.

### Template de Confirmação (`app/api/emails/confirmation-email.tsx`)

Recebe: `name`
Email simples de "Recebemos sua solicitação" enviado ao cliente.

---

## Fase 4 — Criar API Routes

Cada rota segue o mesmo padrão:

```
POST /api/forms/{tipo}
├── Validação dos campos obrigatórios
├── Rate limiting por IP (5 req/min)
├── Sanitização dos dados
├── Envio de email para admin (Resend)
├── Envio de email de confirmação ao usuário
└── Resposta JSON { success: true } ou { error: "..." }
```

### Endpoints:

| Rota | Formulário | Subject do Email |
|---|---|---|
| `POST /api/forms/contact` | ContactForm | "Novo Contato: {nome}" |
| `POST /api/forms/corporate` | CorporateForm | "Solicitação Corporativa: {nome}" |
| `POST /api/forms/mice` | MiceForm | "Solicitação MICE: {nome}" |
| `POST /api/forms/leisure` | LeisureForm | "Solicitação Lazer: {nome}" |

### Fluxo de cada rota:

1. Receber `request.json()`
2. Verificar rate limit
3. Validar campos obrigatórios (retornar 400 se faltam)
4. Sanitizar strings (trim, limitar tamanho)
5. Enviar email admin via `resend.emails.send()`
6. Enviar confirmação ao usuário (em paralelo, não bloqueia)
7. Retornar 200 com `{ success: true }`

---

## Fase 5 — Rate Limiting e Validação Server-side

### `app/lib/rate-limit.ts`

Rate limiter em memória — limita 5 requisições por IP por minuto. Funciona bem para tráfego moderado. Para produção de alto volume, considerar Redis.

### `app/lib/validation.ts`

- `isValidEmail()` — Regex de validação
- `sanitizeString()` — Trim + limita a 500 caracteres
- `sanitizeArray()` — Filtra e sanitiza arrays de strings

---

## Fase 6 — Atualizar Componentes de Formulário

### Mudanças em cada formulário:

1. **Adicionar estado `"error"`** ao status (era: idle/loading/success → agora: idle/loading/success/error)
2. **Substituir o onSubmit fake** por `fetch()` real apontando para a API route
3. **Adicionar tratamento de erros** com mensagem e botão "Tentar novamente"
4. **Desabilitar inputs** durante loading (UX)
5. **Chamar `reset()`** do react-hook-form após sucesso

---

## Fase 7 — Hook Reutilizável `useFormSubmit`

### `app/lib/useFormSubmit.ts`

Hook customizado que encapsula a lógica de fetch + estados + tratamento de erros para evitar duplicação de código nos 4 formulários.

```typescript
// Uso simplificado:
const { status, errorMessage, submit } = useFormSubmit("/api/forms/contact");
```

---

## Fase 8 — Testes

### Checklist de testes:

- [ ] Formulário de contato envia email ao admin
- [ ] Formulário corporativo envia com lista de produtos
- [ ] Formulário MICE envia com serviços selecionados
- [ ] Formulário lazer envia com assunto/destino
- [ ] Email de confirmação chega ao cliente
- [ ] Rate limit funciona (6ª requisição retorna 429)
- [ ] Campos vazios retornam erro 400
- [ ] Email inválido retorna erro de validação
- [ ] Estado de erro exibe botão "Tentar novamente"
- [ ] Build do Next.js compila sem erros

---

## Requisitos para Produção

### No Resend:
1. Verificar domínio `singularis.tur.br` (DNS TXT/CNAME)
2. Configurar SPF, DKIM e DMARC para entregabilidade

### No Hosting (Vercel/etc):
1. Adicionar `RESEND_API_KEY` nas variáveis de ambiente
2. Adicionar `FORM_RECIPIENT_EMAIL` nas variáveis de ambiente

### Melhorias futuras:
- Salvar submissões em banco de dados (Supabase, Prisma + PostgreSQL)
- Dashboard admin para visualizar leads
- Webhook para Slack/Discord com notificações instantâneas
- Analytics de taxa de conversão dos formulários
