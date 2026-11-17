export const P = {
  /** Tarifa média residencial Neoenergia Brasília (DF), 2026 — R$/kWh */
  tarifa: 1.05,
  /** Geração específica de referência no DF — kWh por kWp por mês */
  geracaoPorKwp: 131,
  /** Custo de disponibilidade que continua sendo pago — kWh/mês */
  disponibilidadeKwh: 60,
  /** Componente Fio B da TUSD — R$/kWh (referência 2026) */
  fioBComponente: 0.28,
  /** Percentual do Fio B pago em 2026 (Lei 14.300) */
  fioB: 0.6,
  /** Fração da geração que passa pela rede e é compensada */
  fracaoRede: 0.7,
  /** Fator de emissão médio do SIN — kg CO2 por kWh */
  co2PorKwh: 0.038,
  /** Potência do módulo de referência — Wp */
  moduloWp: 620,
  /** Área ocupada por módulo — m² */
  areaModulo: 2.58,
  precoMinimo: 10900,
} as const

export function precoPorKwp(kwp: number): number {
  if (kwp <= 4) return 4500
  if (kwp <= 8) return 4200
  if (kwp <= 15) return 3900
  return 3600
}

export type Simulacao = {
  conta: number
  consumo: number
  kwp: number
  modulos: number
  area: number
  geracao: number
  energiaCompensada: number
  bruto: number
  fioB: number
  economia: number
  economiaAnual: number
  economia25: number
  preco: number
  precoMin: number
  precoMax: number
  payback: number
  co2: number
  cobertura: number
}

export function simular(conta: number): Simulacao {
  const valor = Math.max(120, Math.min(12000, conta || 0))
  const consumo = valor / P.tarifa
  const compensavel = Math.max(consumo * 0.45, consumo - P.disponibilidadeKwh)
  const kwpBruto = Math.max(1.6, (compensavel / P.geracaoPorKwp) * 1.08)
  const modulos = Math.max(3, Math.round((kwpBruto * 1000) / P.moduloWp))
  const kwp = Math.round(((modulos * P.moduloWp) / 1000) * 10) / 10
  const area = Math.round(modulos * P.areaModulo)
  const geracao = kwp * P.geracaoPorKwp
  const energiaCompensada = Math.min(geracao, compensavel)
  const bruto = energiaCompensada * P.tarifa
  const fioB = energiaCompensada * P.fracaoRede * P.fioBComponente * P.fioB
  const economia = Math.max(0, bruto - fioB)
  const preco = Math.max(P.precoMinimo, kwp * precoPorKwp(kwp))
  const payback = economia > 0 ? preco / (economia * 12) : 0
  const co2 = (geracao * 12 * P.co2PorKwh) / 1000

  return {
    conta: valor,
    consumo,
    kwp,
    modulos,
    area,
    geracao,
    energiaCompensada,
    bruto,
    fioB,
    economia,
    economiaAnual: economia * 12,
    economia25: economia * 12 * 25 * 0.85,
    preco,
    precoMin: preco * 0.92,
    precoMax: preco * 1.1,
    payback,
    co2,
    cobertura: Math.min(0.98, energiaCompensada / consumo),
  }
}

const brlFmt = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})
const numFmt = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 })
const decFmt = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})

export const brl = (n: number) => brlFmt.format(Number.isFinite(n) ? n : 0)
export const num = (n: number) => numFmt.format(Number.isFinite(n) ? n : 0)
export const dec = (n: number) => decFmt.format(Number.isFinite(n) ? n : 0)
