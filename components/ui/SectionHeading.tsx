import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  highlightedWord,
  description,
  align = "left",
}: SectionHeadingProps) {
  const renderedTitle = highlightedWord
    ? title.replace(
        highlightedWord,
        `<span class="font-serif italic text-gradient">${highlightedWord}</span>`,
      )
    : title;

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--gold)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="text-4xl leading-none font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-5xl lg:text-6xl"
        dangerouslySetInnerHTML={{ __html: renderedTitle }}
      />
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
