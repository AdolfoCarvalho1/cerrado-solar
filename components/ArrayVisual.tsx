import type { CSSProperties } from 'react'

export default function ArrayVisual({
  modulos,
  kwp,
  hibrido = false,
  compacto = false,
}: {
  modulos: number
  kwp: number
  hibrido?: boolean
  compacto?: boolean
}) {
  const cols = Math.min(compacto ? 6 : 9, Math.max(4, Math.ceil(Math.sqrt(modulos))))
  const maxRows = compacto ? 2 : 4
  const rows = Math.min(maxRows, Math.ceil(modulos / cols))
  const shown = Math.min(modulos, cols * rows)
  const excedente = modulos - shown
  const baterias = Math.max(1, Math.min(4, Math.round(kwp / 5)))

  return (
    <div className={`array ${compacto ? 'array--compact' : ''}`}>
      <div className="array__scene">
        <div
          className="array__grid"
          style={{ '--cols': cols } as CSSProperties}
        >
          {Array.from({ length: shown }).map((_, i) => (
            <span className="array__panel" key={i} />
          ))}
          {excedente > 0 && <span className="array__more">+{excedente}</span>}
        </div>
        {hibrido && (
          <div className="array__bank">
            <div className="array__bats" aria-hidden="true">
              {Array.from({ length: baterias }).map((_, i) => (
                <span className="array__bat" key={i} />
              ))}
            </div>
            <small>
              {baterias}× bateria{baterias > 1 ? 's' : ''} · 5,12 kWh
            </small>
          </div>
        )}
        <span className="array__count">{modulos} painéis</span>
      </div>

      <div className="array__caption">
        <span>Arranjo estimado</span>
        <b>
          {modulos} módulos · {String(kwp).replace('.', ',')} kWp
        </b>
        <small>
          {hibrido
            ? `sistema híbrido · ${baterias} bateria${baterias > 1 ? 's' : ''} de 5,12 kWh`
            : 'sistema on-grid, sem bateria'}
        </small>
      </div>
    </div>
  )
}
