'use client'

import { useEffect, useId, useMemo, useState, type CSSProperties } from 'react'
import { brl, dec, num, simular } from '@/lib/solar'
import { waLink } from '@/lib/site'
import ArrayVisual from '@/components/ArrayVisual'

type Imovel = 'casa' | 'comercio' | 'rural' | 'condominio'
type Telhado = 'ceramico' | 'metalico' | 'laje' | 'solo'
type Sistema = 'ongrid' | 'hibrido'

const IMOVEIS: { v: Imovel; label: string; fator: number }[] = [
  { v: 'casa', label: 'Casa', fator: 1 },
  { v: 'comercio', label: 'Comércio', fator: 0.96 },
  { v: 'rural', label: 'Rural', fator: 1.06 },
  { v: 'condominio', label: 'Casa em condomínio', fator: 1.03 },
]

const TELHADOS: { v: Telhado; label: string }[] = [
  { v: 'ceramico', label: 'Cerâmico' },
  { v: 'metalico', label: 'Metálico' },
  { v: 'laje', label: 'Laje' },
  { v: 'solo', label: 'Solo / carport' },
]

export default function Diagnostico() {
  const id = useId()
  const [conta, setConta] = useState(620)
  const [imovel, setImovel] = useState<Imovel>('casa')
  const [telhado, setTelhado] = useState<Telhado>('ceramico')
  const [sistema, setSistema] = useState<Sistema>('ongrid')
  const [announce, setAnnounce] = useState('')

  const base = useMemo(() => simular(conta), [conta])
  const fatorImovel = IMOVEIS.find((i) => i.v === imovel)?.fator ?? 1
  const preco = base.preco * fatorImovel * (sistema === 'hibrido' ? 1.34 : 1)
  const payback = base.economia > 0 ? preco / (base.economia * 12) : 0
  const contaDepois = Math.max(base.conta * 0.06, base.conta - base.economia)

  useEffect(() => {
    const t = setTimeout(() => {
      setAnnounce(
        `Estimativa atualizada: sistema de ${dec(base.kwp)} quilowatts-pico, investimento a partir de ${brl(
          preco * 0.92,
        )}, economia de ${brl(base.economia)} por mês e retorno em ${dec(payback)} anos.`,
      )
    }, 800)
    return () => clearTimeout(t)
  }, [base.kwp, base.economia, preco, payback])

  const mensagem = [
    `Olá, Cerrado Solar. Fiz o diagnóstico no site.`,
    ``,
    `Conta média: ${brl(base.conta)}/mês`,
    `Imóvel: ${IMOVEIS.find((i) => i.v === imovel)?.label}`,
    `Telhado: ${TELHADOS.find((t) => t.v === telhado)?.label}`,
    `Sistema: ${sistema === 'hibrido' ? 'Híbrido com bateria' : 'On-grid'}`,
    ``,
    `Sistema estimado: ${dec(base.kwp)} kWp (${num(base.modulos)} módulos)`,
    `Investimento estimado: ${brl(preco)}`,
    `Economia estimada: ${brl(base.economia)}/mês`,
    `Retorno estimado: ${dec(payback)} anos`,
    ``,
    `Quero validar o projeto com a vistoria.`,
  ].join('\n')

  return (
    <div className="formcard">
      <fieldset>
        <legend>01 · Sua conta de luz</legend>
        <div className="field">
          <div className="field__row">
            <label htmlFor={`${id}-valor`}>Valor médio mensal</label>
            <output htmlFor={`${id}-valor`}>
              {brl(conta)}
              <small>/mês</small>
            </output>
          </div>
          <input
            id={`${id}-range`}
            type="range"
            min={250}
            max={8000}
            step={10}
            value={conta}
            onChange={(e) => setConta(Number(e.target.value))}
            style={{ '--fill': `${((conta - 250) / (8000 - 250)) * 100}%` } as CSSProperties}
            aria-label="Conta média mensal em reais, controle deslizante"
          />
          <div className="formgrid" style={{ marginTop: '0.6rem' }}>
            <div className="field">
              <label htmlFor={`${id}-valor`}>Ou digite o valor (R$)</label>
              <input
                id={`${id}-valor`}
                className="input"
                type="number"
                inputMode="numeric"
                min={120}
                max={12000}
                step={10}
                value={conta}
                onChange={(e) => setConta(Number(e.target.value) || 0)}
                onBlur={(e) => setConta(Math.max(120, Math.min(12000, Number(e.target.value) || 120)))}
              />
            </div>
            <div className="field">
              <label htmlFor={`${id}-imovel`}>Tipo de imóvel</label>
              <select
                id={`${id}-imovel`}
                className="input"
                value={imovel}
                onChange={(e) => setImovel(e.target.value as Imovel)}
              >
                {IMOVEIS.map((i) => (
                  <option key={i.v} value={i.v}>
                    {i.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>02 · Telhado e sistema</legend>
        <div className="formgrid">
          <div className="field">
            <label htmlFor={`${id}-telhado`}>Cobertura</label>
            <select
              id={`${id}-telhado`}
              className="input"
              value={telhado}
              onChange={(e) => setTelhado(e.target.value as Telhado)}
            >
              {TELHADOS.map((t) => (
                <option key={t.v} value={t.v}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor={`${id}-sistema`}>Sistema</label>
            <select
              id={`${id}-sistema`}
              className="input"
              value={sistema}
              onChange={(e) => setSistema(e.target.value as Sistema)}
            >
              <option value="ongrid">On-grid (compensação)</option>
              <option value="hibrido">Híbrido com bateria</option>
            </select>
          </div>
        </div>
      </fieldset>

      <ArrayVisual modulos={base.modulos} kwp={base.kwp} hibrido={sistema === 'hibrido'} />

      <div className="results" aria-live="polite" aria-atomic="false">
        <div className="result">
          <span>Potência</span>
          <strong>
            {dec(base.kwp)} <small style={{ display: 'inline', fontSize: '0.5em' }}>kWp</small>
          </strong>
          <small>{num(base.modulos)} módulos de 620 Wp</small>
        </div>
        <div className="result">
          <span>Área necessária</span>
          <strong>{num(base.area)} m²</strong>
          <small>telhado {TELHADOS.find((t) => t.v === telhado)?.label.toLowerCase()}</small>
        </div>
        <div className="result result--hi">
          <span>Economia / mês</span>
          <strong>{brl(base.economia)}</strong>
          <small>{brl(base.economiaAnual)} por ano</small>
        </div>
        <div className="result result--cost">
          <span>Investimento</span>
          <strong>{brl(base.preco * fatorImovel * (sistema === 'hibrido' ? 1.34 : 1))}</strong>
          <small>faixa de {brl(preco * 0.92)} a {brl(preco * 1.1)}</small>
        </div>
        <div className="result">
          <span>Retorno</span>
          <strong>
            {dec(payback)} <small style={{ display: 'inline', fontSize: '0.5em' }}>anos</small>
          </strong>
          <small>com Fio B de 60% em 2026</small>
        </div>
        <div className="result">
          <span>CO₂ evitado</span>
          <strong>{num(base.co2 * 1000)} kg</strong>
          <small>por ano · {num(base.geracao)} kWh/mês gerados</small>
        </div>
      </div>

      <div className="bar" aria-hidden="true">
        <div className="bar__row">
          <span>Conta hoje</span>
          <span className="bar__track">
            <span className="bar__fill bar__fill--now" style={{ width: '100%' }} />
          </span>
          <b>{brl(base.conta)}</b>
        </div>
        <div className="bar__row">
          <span>Conta depois</span>
          <span className="bar__track">
            <span
              className="bar__fill bar__fill--after"
              style={{ width: `${Math.max(3, (contaDepois / base.conta) * 100)}%` }}
            />
          </span>
          <b>{brl(contaDepois)}</b>
        </div>
      </div>

      <div className="actions">
        <a
          className="btn btn--lg"
          href={waLink(mensagem)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enviar diagnóstico no WhatsApp <span className="arrow">↗</span>
        </a>
        <a className="btn btn--ghost btn--lg" href="#contato">
          Pedir visita técnica
        </a>
      </div>

      <p className="fineprint">
        Premissas: tarifa de R$ 1,05/kWh (Neoenergia-DF), geração de 131 kWh/mês por kWp,
        disponibilidade de 60 kWh, 70% da energia passando pela rede, Fio B de 60% e componente Fio
        B de R$ 0,28/kWh. Investimento de referência: R$ 4.500/kWp até 4 kWp, R$ 4.200/kWp até 8
        kWp, R$ 3.900/kWp até 15 kWp. Híbrido com bateria: +34%. Valores estimados, sujeitos a
        vistoria e homologação.
      </p>

      <p className="sr-only" role="status" aria-live="polite">
        {announce}
      </p>
    </div>
  )
}
