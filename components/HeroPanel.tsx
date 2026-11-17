'use client'

import { useId, useMemo, useState, type CSSProperties } from 'react'
import { brl, dec, num, simular } from '@/lib/solar'

const R = 54
const ARC = Math.PI * R

export default function HeroPanel() {
  const [conta, setConta] = useState(620)
  const id = useId()
  const s = useMemo(() => simular(conta), [conta])
  const billCoverage = Math.min(0.98, s.economia / s.conta)
  const pct = Math.round(billCoverage * 100)

  return (
    <div className="panel">
      <div className="panel__head">
        <span className="mono">Simulador · estimativa</span>
        <span className="dot-live" aria-hidden="true" />
      </div>

      <div className="panel__body">
        <div className="field">
          <div className="field__row">
            <label htmlFor={`${id}-conta`}>Conta média de luz</label>
            <output htmlFor={`${id}-conta`}>
              {brl(conta)}
              <small>/mês</small>
            </output>
          </div>
          <input
            id={`${id}-conta`}
            type="range"
            min={250}
            max={3500}
            step={10}
            value={conta}
            onChange={(e) => setConta(Number(e.target.value))}
            style={{ '--fill': `${((conta - 250) / (3500 - 250)) * 100}%` } as CSSProperties}
            aria-describedby={`${id}-hint`}
          />
          <div className="range-scale" aria-hidden="true">
            <span>R$ 250</span>
            <span>R$ 3.500</span>
          </div>
          <div className="presets">
            {[300, 620, 1200, 2500].map((v) => (
              <button
                type="button"
                key={v}
                aria-pressed={conta === v}
                onClick={() => setConta(v)}
              >
                {brl(v)}
              </button>
            ))}
          </div>
        </div>

        <div className="readout">
          <div className="readout__cell">
            <span>Sistema estimado</span>
            <strong>
              {dec(s.kwp)}
              <em>kWp</em>
            </strong>
          </div>
          <div className="readout__cell readout__cell--accent">
            <span>Economia / mês</span>
            <strong>{brl(s.economia)}</strong>
          </div>
          <div className="readout__cell">
            <span>Retorno</span>
            <strong>
              {dec(s.payback)}
              <em>anos</em>
            </strong>
          </div>
          <div className="readout__cell readout__cell--cost">
            <span>Investimento</span>
            <strong>{brl(s.preco)}</strong>
          </div>
        </div>

        <div className="gauge">
          <svg viewBox="0 0 140 74" role="img" aria-label={`Cobertura estimada: ${pct}% da conta`}>
            <path
              d={`M16 64 A${R} ${R} 0 0 1 124 64`}
              fill="none"
              stroke="var(--line)"
              strokeWidth="10"
            />
            <path
              d={`M16 64 A${R} ${R} 0 0 1 124 64`}
              fill="none"
              stroke="var(--blue)"
              strokeWidth="10"
              strokeDasharray={`${ARC * billCoverage} ${ARC}`}
            />
            <text
              x="70"
              y="58"
              textAnchor="middle"
              fill="var(--ink)"
              fontFamily="var(--font-display)"
              fontSize="22"
            >
              {pct}%
            </text>
          </svg>
          <div>
            <div className="gauge__num">da conta coberta</div>
            <p>
              {num(s.modulos)} módulos · {num(s.area)} m² de telhado · {num(s.geracao)} kWh/mês de
              geração estimada.
            </p>
          </div>
        </div>

        <p className="fineprint" id={`${id}-hint`}>
          Estimativa com tarifa Neoenergia-DF de R$ 1,05/kWh, geração de 131 kWh/mês por kWp e Fio B
          de 60% (2026). Não é orçamento: o número final sai da vistoria.
        </p>

        <a className="panel__link" href="#diagnostico">
          Ver diagnóstico completo <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  )
}
