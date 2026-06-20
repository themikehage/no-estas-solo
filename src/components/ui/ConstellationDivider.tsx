const dots = [
  { color: 'text-synapse-green', x: 0, y: 16 },
  { color: 'text-dopamine-gold', x: 32, y: 8 },
  { color: 'text-stone-warm', x: 64, y: 13 },
  { color: 'text-azulejo-blue', x: 96, y: 19 },
  { color: 'text-thread-red', x: 128, y: 16 },
]

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 2], [2, 4], [1, 3],
]

export default function ConstellationDivider() {
  return (
    <div className="flex items-center justify-center py-16" aria-hidden="true">
      <svg
        className="w-32 h-8"
        viewBox="-2 0 132 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {connections.map(([i, j]) => (
          <line
            key={`${i}-${j}`}
            x1={dots[i].x}
            y1={dots[i].y}
            x2={dots[j].x}
            y2={dots[j].y}
            stroke="rgba(245,245,240,0.08)"
            strokeWidth="0.5"
          />
        ))}
        {dots.map((dot) => (
          <circle
            key={dot.x}
            cx={dot.x}
            cy={dot.y}
            r="2"
            className={dot.color}
            fill="currentColor"
            opacity="0.5"
          />
        ))}
      </svg>
    </div>
  )
}
