export default function AmbientBackground({
  variant = "default",
}: {
  variant?: "default" | "hero";
}) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-60" />
      <div
        className={
          variant === "hero"
            ? "absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent-blue/20 blur-[140px] animate-float"
            : "absolute -left-40 top-10 h-72 w-72 rounded-full bg-accent-blue/10 blur-[120px] animate-float"
        }
      />
      <div
        className={
          variant === "hero"
            ? "absolute right-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-accent-violet/20 blur-[130px] animate-float-delayed"
            : "absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-accent-violet/10 blur-[120px] animate-float-delayed"
        }
      />
    </div>
  );
}
