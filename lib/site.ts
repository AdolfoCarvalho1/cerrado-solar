export const SITE = {
  brand: 'Cerrado Solar',
  tagline: 'Engenharia fotovoltaica',
  city: 'Planaltina · DF',
  whatsapp: '5561999999999',
  email: 'contato@cerradosolar.com.br',
  crea: 'CREA-DF 00000',
  cnpj: '00.000.000/0001-00',
  address: 'Setor Central, Planaltina — DF',
}

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
}
