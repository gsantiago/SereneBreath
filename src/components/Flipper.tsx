export interface FlipperProps extends React.HTMLProps<HTMLDivElement> {
  front: React.ReactNode;
  back: React.ReactNode;
  flipped: boolean;
}

export function Flipper({
  front,
  back,
  flipped,
  style,
  className,
  ...props
}: FlipperProps) {
  return (
    <section className="h-full" style={{ perspective: "1000px" }}>
      <div
        {...props}
        className={`relative h-full w-full transition-all duration-500 ${className}`}
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          perspective: 1000,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0)",
          ...style,
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateX(0deg)",
          }}
        >
          {front}
        </div>
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(-180deg)",
          }}
        >
          {back}
        </div>
      </div>
    </section>
  );
}
