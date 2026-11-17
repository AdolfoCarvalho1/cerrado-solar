export default function Roof({ modules }: { modules: number }) {
  const cols = Math.min(5, Math.max(4, Math.ceil(Math.sqrt(modules))))
  const rows = Math.min(3, Math.max(2, Math.ceil(modules / cols)))
  const x0 = 50
  const x1 = 170
  const y0 = 33
  const y1 = 70
  const gap = 2.5
  const w = (x1 - x0 - gap * (cols - 1)) / cols
  const h = (y1 - y0 - gap * (rows - 1)) / rows

  const panels = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = x0 + c * (w + gap)
      const y = y0 + r * (h + gap)
      panels.push(<rect key={`${r}-${c}`} x={x} y={y} width={w} height={h} rx="1" />)
    }
  }

  return (
    <svg className="roof" viewBox="0 0 220 88" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M6 80 L48 19 H172 L214 80" />
        <path d="M48 19 L48 80 M172 19 L172 80" strokeWidth="0.7" opacity="0.55" />
        <path d="M6 80 H214" strokeWidth="1.6" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.85">
        {panels}
      </g>
      <circle cx="196" cy="14" r="7" stroke="var(--sun-deep)" strokeWidth="1.8" fill="none" />
      <path d="M196 1 V4 M196 24 V27 M183 14 H186 M206 14 H209" stroke="var(--sun-deep)" strokeWidth="1.6" />
    </svg>
  )
}
