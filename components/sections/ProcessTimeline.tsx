interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div>
      {/* Desktop: horizontal flow */}
      <div className="hidden lg:flex items-start gap-0">
        {steps.map((step, i) => (
          <div key={step.number} className="flex items-start flex-1 min-w-0">
            {/* Step content */}
            <div className="flex flex-col flex-1 min-w-0 pr-4">
              <span className="text-5xl font-light text-brand-golden leading-none mb-4">
                {step.number}
              </span>
              <div className="w-8 h-px bg-brand-golden mb-4" aria-hidden="true" />
              <h3 className="text-base font-medium text-brand-black mb-2 tracking-wide">
                {step.title}
              </h3>
              <p className="text-[13px] font-light text-brand-earth leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <div className="flex-shrink-0 pt-6 px-2" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-brand-golden/40"
                >
                  <path
                    d="M4 8H12M9 5L12 8L9 11"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical list */}
      <div className="lg:hidden flex flex-col">
        {steps.map((step, i) => (
          <div key={step.number} className="flex gap-6">
            {/* Left: number + vertical line */}
            <div className="flex flex-col items-center flex-shrink-0">
              <span className="text-3xl font-light text-brand-golden leading-none w-8 text-center">
                {step.number}
              </span>
              {i < steps.length - 1 && (
                <div className="flex-1 w-px bg-brand-golden/25 my-2" aria-hidden="true" />
              )}
            </div>

            {/* Right: content */}
            <div className={`flex-1 ${i < steps.length - 1 ? "pb-10" : ""}`}>
              <h3 className="text-base font-medium text-brand-black mb-2 tracking-wide mt-0.5">
                {step.title}
              </h3>
              <p className="text-[13px] font-light text-brand-earth leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
