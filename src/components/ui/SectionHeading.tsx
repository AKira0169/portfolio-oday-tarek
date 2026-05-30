interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  className?: string;
}

const SectionHeading = ({ eyebrow, title, className }: SectionHeadingProps) => {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-wide text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
