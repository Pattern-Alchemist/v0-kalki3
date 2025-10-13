export function ConstellationDivider() {
  return (
    <div className="relative w-full h-24 flex items-center justify-center my-12" aria-hidden="true">
      <svg
        className="w-full max-w-md h-full opacity-30"
        viewBox="0 0 400 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Constellation pattern */}
        <circle cx="50" cy="50" r="2" fill="currentColor" className="text-cyan-400" />
        <circle cx="120" cy="30" r="2" fill="currentColor" className="text-cyan-400" />
        <circle cx="180" cy="60" r="2" fill="currentColor" className="text-cyan-400" />
        <circle cx="250" cy="40" r="2" fill="currentColor" className="text-cyan-400" />
        <circle cx="320" cy="55" r="2" fill="currentColor" className="text-cyan-400" />
        <circle cx="350" cy="45" r="2" fill="currentColor" className="text-cyan-400" />

        {/* Connecting lines */}
        <line x1="50" y1="50" x2="120" y2="30" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/50" />
        <line x1="120" y1="30" x2="180" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/50" />
        <line x1="180" y1="60" x2="250" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/50" />
        <line x1="250" y1="40" x2="320" y2="55" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/50" />
        <line x1="320" y1="55" x2="350" y2="45" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/50" />
      </svg>
    </div>
  )
}
