interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  light?: boolean;
}

export default function Breadcrumb({ items, className = "", light = false }: BreadcrumbProps) {
  const textColor = light ? "text-white/50" : "text-brand-earth/60";
  const linkColor = light
    ? "text-white/50 hover:text-white/80"
    : "text-brand-earth/60 hover:text-brand-earth";

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-2" role="list">
        <li>
          <a
            href="/"
            className={`text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-150 ${linkColor}`}
          >
            Home
          </a>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              <span className={`text-[11px] ${textColor}`} aria-hidden="true">
                /
              </span>
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className={`text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-150 ${linkColor}`}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`text-[11px] font-medium tracking-[0.1em] uppercase ${
                    light ? "text-white/80" : "text-brand-black"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
