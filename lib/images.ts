export type Frame = {
  src: string
  alt: string
  kicker: string
  title: string
  text: string
  stat: string
  has?: boolean
}

export const panoramaFrames: Frame[] = [
  {
    src: '/img/pano-01-cerrado.jpg',
    alt: 'Usina solar no Cerrado ao pôr do sol, com fileiras de painéis sobre terra vermelha',
    kicker: 'O combustível',
    title: 'O sol não manda boleto.',
    text: 'A matéria-prima do sistema é gratuita, local e não depende de bandeira tarifária.',
    stat: '5,6 kWh/m² por dia',
  },
  {
    src: '/img/pano-02-telhado.jpg',
    alt: 'Telhado de casa em Planaltina com painéis solares e céu azul',
    kicker: 'O projeto',
    title: 'Tudo começa no telhado.',
    text: 'Vistoria, sombreamento, padrão de entrada e histórico de consumo. Sem isso, orçamento é chute.',
    stat: '1 visita · 60 min',
  },
  {
    src: '/img/pano-03-instalador.jpg',
    alt: 'Instaladores trabalhando em telhado cerâmico com módulos solares',
    kicker: 'A obra',
    title: 'Quem instala é gente.',
    text: 'Equipe própria, ART no CREA-DF e obra documentada. O telhado é da casa de alguém.',
    stat: '1 a 2 dias de instalação',
  },
  {
    src: '/img/pano-04-familia.jpg',
    alt: 'Família na cozinha pela manhã, com luz natural',
    kicker: 'A conta',
    title: 'Previsibilidade, não promessa.',
    text: 'A economia entra no cálculo com Fio B de 2026 e todas as premissas à vista.',
    stat: '70% a 90% da conta',
  },
  {
    src: '/img/pano-05-cidade.jpg',
    alt: 'Cidade ao anoitecer com telhados solares em primeiro plano',
    kicker: 'Depois do sol',
    title: 'O sistema continua acordado.',
    text: 'Bateria, monitoramento e assistência. A energia não tira férias.',
    stat: '25 anos de acompanhamento',
  },
]
