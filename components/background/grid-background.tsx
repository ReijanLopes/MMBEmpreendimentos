export function GridBackground() {
  return (
    <div className="inset-0 z-0 h-full pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-size-[40px_40px] animate-grid" />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/10 rounded-full blur-[120px] " />
    </div>
  );
}
