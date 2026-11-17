import HeroPanel from '@/components/HeroPanel'
import Diagnostico from '@/components/Diagnostico'
import LeadForm from '@/components/LeadForm'
import Panorama from '@/components/Panorama'
import { panoramaFrames } from '@/lib/images'
import { brl, dec, num, simular } from '@/lib/solar'
import { SITE, waLink } from '@/lib/site'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

const ex = simular(620)
const frames = panoramaFrames
  .map((f) => ({
    ...f,
    has: existsSync(join(process.cwd(), 'public', f.src)),
  }))
  .filter((f) => f.has)
const parcelaMensal = (ex.preco * 0.013) / (1 - Math.pow(1.013, -60))
const contaResidual = ex.conta - ex.economia
const totalDistribuidora = 620 * 12 * ((Math.pow(1.07, 25) - 1) / 0.07)
const totalSistema = parcelaMensal * 60 + contaResidual * 12 * 25

const ticker = [
  ['77,3 GW', 'de solar instalados no Brasil'],
  ['4,6 milhões', 'de sistemas de geração distribuída'],
  ['5,6 kWh/m²', 'de irradiação média por dia no DF'],
  ['131 kWh', 'gerados por kWp ao mês em Brasília'],
  ['Fio B 60%', 'em 2026, pela Lei 14.300'],
  ['6,6 milhões', 'de consumidores atendidos por GD'],
]

const passos = [
  {
    n: '01',
    t: 'Vistoria e dimensionamento',
    d: 'Conta, telhado, sombreamento, padrão de entrada e hábitos de consumo. O sistema nasce do consumo real — não de um kit pronto.',
    tempo: '1 visita · 60 min',
  },
  {
    n: '02',
    t: 'Projeto elétrico e ART',
    d: 'Unifilar, memorial descritivo, estrutura e responsabilidade técnica no CREA-DF. Projeto assinado, não copiado.',
    tempo: '3 a 5 dias',
  },
  {
    n: '03',
    t: 'Homologação na distribuidora',
    d: 'Protocolo na Neoenergia Brasília, ajustes e acompanhamento até a aprovação da conexão. Sem pendência jogada no cliente.',
    tempo: '20 a 45 dias',
  },
  {
    n: '04',
    t: 'Instalação',
    d: 'Fixação, módulos, string box, inversor e aterramento. Telhado limpo, obra documentada e sistema testado em carga.',
    tempo: '1 a 2 dias',
  },
  {
    n: '05',
    t: 'Monitoramento e O&M',
    d: 'Acompanhamento de geração, limpeza e manutenção preventiva. O sistema não pode virar cliente órfão.',
    tempo: '25 anos',
  },
]

const obras = [
  {
    local: 'Planaltina · DF',
    tipo: 'Residencial',
    kwp: '5,2 kWp',
    antes: 'R$ 890',
    depois: 'R$ 255',
    economia: 'R$ 635',
    pay: '2,9 anos',
    modulos: 9,
    img: '/img/pano-02-telhado.jpg',
    alt: 'Casa em Planaltina com telhado cerâmico coberto de painéis solares',
  },
  {
    local: 'Sobradinho · DF',
    tipo: 'Comércio',
    kwp: '22 kWp',
    antes: 'R$ 3.180',
    depois: 'R$ 493',
    economia: 'R$ 2.687',
    pay: '2,7 anos',
    modulos: 36,
    img: '/img/padaria.jpg',
    alt: 'Padaria de bairro com painéis solares no telhado',
  },
  {
    local: 'Águas Claras · DF',
    tipo: 'Casa em condomínio',
    kwp: '8,4 kWp',
    antes: 'R$ 1.450',
    depois: 'R$ 424',
    economia: 'R$ 1.026',
    pay: '2,9 anos',
    modulos: 14,
    img: '/img/aerea-condominio.jpg',
    alt: 'Vista aérea de condomínio residencial com telhados solares',
  },
  {
    local: 'Planaltina · área rural',
    tipo: 'Propriedade rural',
    kwp: '12,4 kWp',
    antes: 'R$ 1.980',
    depois: 'R$ 310',
    economia: 'R$ 1.670',
    pay: '3,1 anos',
    modulos: 20,
    img: '/img/rural.jpg',
    alt: 'Propriedade rural no Cerrado com sistema solar em solo',
  },
  {
    local: 'Santa Maria · DF',
    tipo: 'Galpão comercial',
    kwp: '48 kWp',
    antes: 'R$ 6.400',
    depois: 'R$ 1.180',
    economia: 'R$ 5.220',
    pay: '2,8 anos',
    modulos: 78,
    img: '/img/galpao.jpg',
    alt: 'Galpão comercial com telhado metálico coberto por painéis solares',
  },
]

const baterias = [
  {
    modelo: 'LiFePO4 48V 100Ah',
    cap: '5,12 kWh',
    tipo: 'Lítio (LFP)',
    custo: 6175,
    href: 'https://www.amazon.com.br/Bateria-Oliti-Lifepo4-100ah-Secpower/dp/B0GMK27YKP',
  },
  {
    modelo: 'Centrium 12V 185Ah',
    cap: '≈ 2,2 kWh',
    tipo: 'Chumbo-ácido',
    custo: 1634,
    href: 'https://www.amazon.com.br/Bateria-Centrium-Energy-Df-3000-Freedom/dp/B077R9SZ6Q',
  },
  {
    modelo: 'Moura Solar 12V 111Ah',
    cap: '≈ 1,3 kWh',
    tipo: 'Chumbo-ácido',
    custo: 917.02,
    href: 'https://www.amazon.com.br/Bateria-Estacion%C3%A1ria-12ms111-Energia-Fotovoltaica/dp/B0G5RBFKWH',
  },
]

const faq = [
  {
    q: 'A conta de luz zera?',
    a: 'Não. Continuam sendo cobrados o custo de disponibilidade (o mínimo da ligação), o Fio B sobre a energia compensada e a iluminação pública. Na prática, a economia fica entre 70% e 90% da conta, dependendo do perfil de consumo.',
  },
  {
    q: 'O que é o Fio B e quanto ele pesa em 2026?',
    a: 'É a parcela da tarifa que paga o uso da rede da distribuidora. Pela Lei 14.300/2022, quem protocolou depois de 07/01/2023 paga um percentual crescente: 15% em 2023, 30% em 2024, 45% em 2025, 60% em 2026, 75% em 2027 e 90% em 2028. Quem protocolou antes daquela data fica isento até 2045.',
  },
  {
    q: 'Quanto tempo leva do contrato à instalação?',
    a: 'Projeto e ART levam de 3 a 5 dias. A homologação na distribuidora costuma levar de 20 a 45 dias. A instalação em si leva 1 a 2 dias. O prazo total típico é de 30 a 60 dias.',
  },
  {
    q: 'E à noite ou em dia nublado?',
    a: 'O sistema não gera à noite, e em dia nublado gera menos. A compensação é mensal: a energia injetada na rede vira crédito e abate o consumo nos meses seguintes. O cálculo é feito sobre a geração média, não sobre o pico.',
  },
  {
    q: 'Preciso trocar o telhado?',
    a: 'Só se a estrutura não suportar ou estiver no fim da vida útil. Na vistoria avaliamos telha, caibro, ripado e pontos de fixação. Telha cerâmica e metálica são as situações mais comuns; laje recebe estrutura inclinada.',
  },
  {
    q: 'Dá para financiar?',
    a: 'Sim. As linhas de crédito solar no Centro-Oeste vão até 60 meses, com carência típica de 60 a 120 dias. A parcela costuma ficar abaixo da conta atual. A simulação do site é ilustrativa; a taxa depende do banco e do seu perfil.',
  },
  {
    q: 'Funciona em apartamento?',
    a: 'Precisa de área própria ou de fração ideal do telhado com autorização do condomínio. Onde não há área, a alternativa é a geração compartilhada por assinatura — com desconto menor, mas sem obra.',
  },
  {
    q: 'Quem cuida da homologação e da garantia?',
    a: 'A Cerrado Solar protocola e acompanha a homologação na Neoenergia, com ART no CREA-DF. As garantias seguem o fabricante: 12 a 25 anos para os módulos, 5 a 10 anos para o inversor, e 5 anos para a instalação.',
  },
]

export default function Home() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="nav">
        <div className="wrap nav__inner">
          <a className="brand" href="#topo" aria-label={`${SITE.brand} — início`}>
            Cerrado Solar<span className="dot" aria-hidden="true" />
            <small>engenharia fotovoltaica</small>
          </a>
          <nav className="nav__links" aria-label="Navegação principal">
            <a href="#diagnostico">Diagnóstico</a>
            <a href="#metodo">Método</a>
            <a href="#obras">Obras</a>
            <a href="#financiamento">Financiamento</a>
            <a href="#baterias">Baterias</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <a className="nav__cta" href={waLink('Olá, Cerrado Solar. Quero falar sobre um projeto solar.')} target="_blank" rel="noopener noreferrer">
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="conteudo">
        {/* ---------------- HERO ---------------- */}
        <section className="hero hero--photo" id="topo">
          <div className="hero__bg" aria-hidden="true">
            <img src="/img/pano-00-fazenda.jpg" alt="" />
          </div>
          <div className="wrap">
            <div className="hero__grid">
              <div className="hero__head">
                <div className="hero__eyebrow">
                  <span className="tag">Planaltina · DF</span>
                  <span>Projeto · homologação · instalação · O&amp;M</span>
                </div>

                <h1 className="display display--xl">
                  <span className="accent">O sol já paga.</span>
                  <span>Falta instalar.</span>
                </h1>

                <div className="hero__actions">
                  <a className="btn btn--lg" href="#diagnostico">
                    Abrir diagnóstico <span className="arrow">↓</span>
                  </a>
                  <a
                    className="btn btn--ghost btn--lg"
                    href={waLink('Olá, Cerrado Solar. Quero entender o projeto para o meu imóvel em Planaltina/DF.')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com engenharia
                  </a>
                </div>
              </div>

              <HeroPanel />

              <div className="hero__body">
                <div className="hero__sub">
                  <p>
                    Dimensionamos, homologamos e instalamos sistemas fotovoltaicos no Cerrado.
                    Você vê potência, investimento, economia e retorno <strong>antes</strong> de
                    falar com qualquer vendedor.
                  </p>
                  <div className="hero__facts">
                    <div>
                      <span>Sol no DF</span>
                      <b>5,6 kWh/m²·dia</b>
                    </div>
                    <div>
                      <span>Payback típico no DF</span>
                      <b>2,7 a 4,8 anos</b>
                    </div>
                    <div>
                      <span>Fio B em 2026</span>
                      <b>60%</b>
                    </div>
                    <div>
                      <span>Tarifa local</span>
                      <b>~R$ 1,05/kWh</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="statsband">
            <div className="wrap statsband__grid">
              {ticker.map(([b, t]) => (
                <div className="statsband__item" key={b}>
                  <b>{b}</b>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Panorama frames={frames} />

        {/* ---------------- DIAGNÓSTICO ---------------- */}
        <section className="section" id="diagnostico">
          <div className="wrap split">
            <div className="sticky">
              <p className="kicker">
                <span className="idx">01</span> Diagnóstico
              </p>
              <h2 className="display display--sm">
                A conta é o
                <br />
                briefing.
              </h2>
              <p className="lede">
                Diga quanto você paga por mês. O simulador devolve potência, área de telhado,
                investimento, economia com Fio B e prazo de retorno — com as premissas à vista, sem
                cadastro para ver número.
              </p>
              <ul className="premises">
                <li>Tarifa Neoenergia-DF de R$ 1,05/kWh (2026).</li>
                <li>Geração de 131 kWh/mês por kWp instalado no DF.</li>
                <li>Fio B de 60% sobre a energia compensada.</li>
                <li>Custo de disponibilidade de 60 kWh mantido.</li>
                <li>Investimento de R$ 3.900 a R$ 4.500 por kWp, conforme porte.</li>
              </ul>
            </div>
            <Diagnostico />
          </div>
        </section>

        {/* ---------------- MANIFESTO ---------------- */}
        <section className="section section--tight">
          <div className="wrap split split--media">
            <div>
              <p className="kicker">
                <span className="idx">02</span> Posição
              </p>
              <h2 className="display display--sm">
                Não vendemos placa.
                <br />
                <span className="ghost">Vendemos o projeto que faz ela valer 25 anos.</span>
              </h2>
              <p className="lede">
                O mercado encolheu 29% em 2025 e 8 de cada 10 orçamentos não fecham. Quem sobrevive
                não é o mais barato: é quem entrega dimensionamento correto, homologação sem
                retrabalho e assistência depois da instalação.
              </p>
            </div>

            <figure className="shot">
              <img
                src="/img/modulo-macro.jpg"
                alt="Detalhe macro de um módulo fotovoltaico com reflexo do sol nas células"
                loading="lazy"
                width={1600}
                height={900}
              />
              <figcaption>Módulo monocristalino · 620 Wp · garantia de 25 anos</figcaption>
            </figure>
          </div>
        </section>

        {/* ---------------- MÉTODO ---------------- */}
        <section className="section" id="metodo">
          <div className="wrap">
            <p className="kicker">
              <span className="idx">03</span> Método
            </p>
            <h2 className="display display--sm">
              Do telhado ao
              <br />
              relógio virado.
            </h2>

            <div className="steps">
              {passos.map((p) => (
                <article className="step" key={p.n}>
                  <span className="step__n">{p.n}</span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                  <span className="step__time">{p.tempo}</span>
                </article>
              ))}
            </div>

            <div className="figrow">
              <figure className="shot">
                <img
                  src="/img/fixacao-telha.jpg"
                  alt="Gancho de fixação preso à telha cerâmica com trilho de alumínio"
                  loading="lazy"
                  width={1100}
                  height={1100}
                />
                <figcaption>Fixação mecânica · telha cerâmica, trilho de alumínio</figcaption>
              </figure>
              <figure className="shot">
                <img
                  src="/img/art-mesa.jpg"
                  alt="Mesa com diagrama elétrico, ART e notebook com layout do sistema"
                  loading="lazy"
                  width={1400}
                  height={933}
                />
                <figcaption>Projeto elétrico, memorial e ART no CREA-DF</figcaption>
              </figure>
              <figure className="shot">
                <img
                  src="/img/inversor-display.jpg"
                  alt="Display de inversor híbrido mostrando geração em tempo real"
                  loading="lazy"
                  width={1100}
                  height={1100}
                />
                <figcaption>Inversor com monitoramento · leitura em tempo real</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ---------------- NÚMEROS ---------------- */}
        <section className="section" id="numeros">
          <div className="wrap">
            <p className="kicker">
              <span className="idx">04</span> Números
            </p>
            <h2 className="display display--sm">
              O que o setor diz —
              <br />
              e o que ele não mostra.
            </h2>

            <div className="stats">
              <div className="stat">
                <div className="stat__num">
                  77,3<span>GW</span>
                </div>
                <p>de capacidade solar instalada no Brasil, somando GD e geração centralizada.</p>
                <cite>ABSOLAR · set/2026</cite>
              </div>
              <div className="stat">
                <div className="stat__num">
                  4,6<span>mi</span>
                </div>
                <p>de sistemas de geração distribuída conectados à rede, atendendo 6,6 milhões de consumidores.</p>
                <cite>Portal Solar · 2026</cite>
              </div>
              <div className="stat">
                <div className="stat__num">
                  5,6<span>kWh/m²</span>
                </div>
                <p>de irradiação média diária no DF — uma das melhores do país para geração distribuída.</p>
                <cite>Solar Task · 2026</cite>
              </div>
              <div className="stat">
                <div className="stat__num">
                  18<span>%</span>
                </div>
                <p>é a taxa média de conversão dos integradores: 8 de cada 10 orçamentos não fecham.</p>
                <cite>Greener · 1º sem/2026</cite>
              </div>
            </div>

            <p className="note" style={{ marginTop: '1rem' }}>
              Números de mercado citados com fonte pública. Cases e depoimentos desta página são
              ilustrativos de demonstração.
            </p>
          </div>
        </section>

        {/* ---------------- OBRAS ---------------- */}
        <section className="section" id="obras">
          <div className="wrap">
            <p className="kicker">
              <span className="idx">05</span> Obras
            </p>
            <h2 className="display display--sm">
              Cinco telhados,
              <br />
              cinco contas.
            </h2>

            <div className="cases">
              {obras.map((o) => (
                <article className="case" key={o.local}>
                  <div className="case__top">
                    <span className="case__place">{o.local}</span>
                    <span className="case__kwp">{o.kwp}</span>
                  </div>
                  <div className="case__media">
                    <img src={o.img} alt={o.alt} loading="lazy" width={1600} height={900} />
                  </div>
                  <h3>{o.tipo}</h3>
                  <dl>
                    <div>
                      <dt>Conta antes</dt>
                      <dd className="bad">{o.antes}</dd>
                    </div>
                    <div>
                      <dt>Conta depois</dt>
                      <dd className="good">{o.depois}</dd>
                    </div>
                    <div>
                      <dt>Economia / mês</dt>
                      <dd>{o.economia}</dd>
                    </div>
                    <div>
                      <dt>Retorno</dt>
                      <dd>{o.pay}</dd>
                    </div>
                  </dl>
                  <p className="case__foot">
                    {o.modulos} módulos · on-grid · homologação Neoenergia Brasília · monitoramento
                  </p>
                </article>
              ))}
            </div>

            <p className="note" style={{ marginTop: '1rem' }}>
              Portfólio ilustrativo de demonstração. Valores de conta e retorno são estimativas de
              projeto, não resultados auditados.
            </p>
          </div>
        </section>

        {/* ---------------- FINANCIAMENTO ---------------- */}
        <section className="section" id="financiamento">
          <div className="wrap">
            <p className="kicker">
              <span className="idx">06</span> Financiamento
            </p>
            <h2 className="display display--sm">
              Parcela ou
              <br />
              conta?
            </h2>
            <p className="lede">
              Exemplo com conta de {brl(ex.conta)}: sistema de {dec(ex.kwp)} kWp, investimento de{' '}
              {brl(ex.preco)} e economia estimada de {brl(ex.economia)} por mês.
            </p>

            <div className="finance">
              <div className="compare">
                <h3>Cenário A · continuar na distribuidora</h3>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Saída mensal hoje</td>
                      <td>{brl(ex.conta)}</td>
                    </tr>
                    <tr>
                      <td>Reajuste médio assumido</td>
                      <td>7% ao ano</td>
                    </tr>
                    <tr>
                      <td>Conta em 25 anos (com reajuste)</td>
                      <td>{brl(totalDistribuidora)}</td>
                    </tr>
                    <tr className="total">
                      <td>Patrimônio gerado</td>
                      <td>R$ 0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="compare">
                <h3>Cenário B · sistema financiado</h3>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Parcela (60x, 1,3% a.m.)</td>
                      <td>{brl(parcelaMensal)}</td>
                    </tr>
                    <tr>
                      <td>Conta residual estimada</td>
                      <td>{brl(contaResidual)}</td>
                    </tr>
                    <tr>
                      <td>Saída total em 25 anos</td>
                      <td>{brl(totalSistema)}</td>
                    </tr>
                    <tr className="total">
                      <td>Diferença a favor do sistema</td>
                      <td>{brl(totalDistribuidora - totalSistema)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="note" style={{ marginTop: '0.9rem' }}>
              Simulação ilustrativa. A parcela real depende de banco, taxa e perfil de crédito; o
              cenário B considera conta residual sem reajuste e não inclui seguro, limpeza ou troca
              de inversor.
            </p>

            <div className="fio" tabIndex={0} role="region" aria-label="Cronograma do Fio B">
              <h3 className="mono" style={{ marginBottom: '0.6rem' }}>
                Fio B sobre a energia compensada — Lei 14.300/2022
              </h3>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Ano</th>
                    <th scope="col">Percentual pago</th>
                    <th scope="col">Efeito no retorno</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023</td>
                    <td>15%</td>
                    <td>início da transição</td>
                  </tr>
                  <tr>
                    <td>2025</td>
                    <td>45%</td>
                    <td>payback alonga</td>
                  </tr>
                  <tr className="now">
                    <td>2026</td>
                    <td>60%</td>
                    <td>regra vigente nos cálculos deste site</td>
                  </tr>
                  <tr>
                    <td>2027</td>
                    <td>75%</td>
                    <td>+6 a 8 meses de retorno</td>
                  </tr>
                  <tr>
                    <td>2028</td>
                    <td>90%</td>
                    <td>véspera da regra definitiva</td>
                  </tr>
                </tbody>
              </table>
              <p className="note" style={{ marginTop: '0.6rem' }}>
                Quem protocolou a conexão até 07/01/2023 mantém isenção do Fio B até 31/12/2045.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- BATERIAS ---------------- */}
        <section className="section" id="baterias">
          <div className="wrap">
            <p className="kicker">
              <span className="idx">07</span> Baterias
            </p>
            <h2 className="display display--sm">
              O sol não basta
              <br />
              à noite.
            </h2>
            <p className="lede">
              O sistema híbrido guarda o excedente do dia e cobre a casa quando a rede cai. Abaixo,
              o preço de referência do equipamento isolado — para você repassar com margem — e o
              que a bateria muda no projeto.
            </p>

            <div className="figrow">
              <figure className="shot">
                <img
                  src="/img/bateria-wall.jpg"
                  alt="Bateria de lítio e inversor híbrido instalados na parede da garagem"
                  loading="lazy"
                  width={1400}
                  height={933}
                />
                <figcaption>Bateria de parede + inversor híbrido · 5,12 kWh</figcaption>
              </figure>
              <figure className="shot">
                <img
                  src="/img/rack-baterias.jpg"
                  alt="Rack com módulos de bateria de lítio e cabeamento organizado"
                  loading="lazy"
                  width={1400}
                  height={933}
                />
                <figcaption>Banco de baterias expansível · módulos empilháveis</figcaption>
              </figure>
              <figure className="shot">
                <img
                  src="/img/casa-noite.jpg"
                  alt="Casa iluminada à noite com painéis solares no telhado"
                  loading="lazy"
                  width={1600}
                  height={900}
                />
                <figcaption>Autonomia real · a casa segue ligada depois do pôr do sol</figcaption>
              </figure>
            </div>

            <div className="stats stats--3">
              <div className="stat">
                <div className="stat__num">
                  ≈5<span>kWh</span>
                </div>
                <p>cobrem cerca de um terço do consumo diário de uma casa de 400 kWh/mês.</p>
                <cite>referência de autonomia</cite>
              </div>
              <div className="stat">
                <div className="stat__num">
                  6.000<span>ciclos</span>
                </div>
                <p>é a vida útil típica de uma LFP — cerca de 16 anos de uso diário.</p>
                <cite>fabricantes LFP · 2026</cite>
              </div>
              <div className="stat">
                <div className="stat__num">
                  +34<span>%</span>
                </div>
                <p>é o acréscimo médio no investimento quando o sistema vira híbrido.</p>
                <cite>premissa deste simulador</cite>
              </div>
            </div>

            <p className="btable-title">Preços de referência · capturado em 17/11/2026</p>
            <div className="btable" role="region" aria-label="Preços de referência de baterias" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Modelo</th>
                    <th scope="col">Capacidade</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Custo ref. Amazon</th>
                    <th scope="col">Venda sugerida (+35%)</th>
                    <th scope="col">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {baterias.map((b) => (
                    <tr key={b.modelo}>
                      <td>{b.modelo}</td>
                      <td>{b.cap}</td>
                      <td>{b.tipo}</td>
                      <td className="num">{brl(b.custo)}</td>
                      <td className="num strong">{brl(b.custo * 1.35)}</td>
                      <td>
                        <a className="link-u" href={b.href} target="_blank" rel="noopener noreferrer">
                          Ver oferta ↗
                        </a>
                      </td>
                    </tr>
                  ))}
                  <tr className="market">
                    <td>Banco LiFePO4 10 kWh</td>
                    <td>≈ 9 kWh úteis</td>
                    <td>Lítio (LFP)</td>
                    <td className="num">R$ 12.000–15.000</td>
                    <td className="num strong">R$ 16.200–20.250</td>
                    <td className="muted">mercado</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="note">
              Preços capturados em 17/11/2026 na Amazon.com.br; variam com oferta, frete e
              disponibilidade. A Amazon não tinha oferta confiável de banco de 10 kWh na data — a
              linha usa referência de mercado (Solarprime, 2026). Bateria não é plug-and-play: exige
              inversor híbrido, dimensionamento e ART. Venda sugerida = custo + 35%, sem instalação.
            </p>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="section" id="faq">
          <div className="wrap">
            <p className="kicker">
              <span className="idx">08</span> Dúvidas
            </p>
            <h2 className="display display--sm">
              Pergunta difícil,
              <br />
              resposta reta.
            </h2>

            <div className="faq">
              {faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="a">
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CONECTIVIDADE ---------------- */}
        <section className="section" id="conectividade">
          <div className="wrap conn">
            <div>
              <p className="kicker">
                <span className="idx">09</span> Conectividade
              </p>
              <h2 className="display display--sm">
                O sistema
                <br />
                fala com você.
              </h2>
              <p className="lede">
                Inversor conectado e monitoramento ativo: geração, consumo, bateria e falhas na
                palma da mão. Se o sistema parar de gerar, você sabe antes da conta chegar.
              </p>

              <ul className="conn-list">
                <li>
                  <b>Geração em tempo real</b>
                  <span>potência instantânea e energia do dia</span>
                </li>
                <li>
                  <b>Histórico de 25 anos</b>
                  <span>comparação mês a mês e queda de performance</span>
                </li>
                <li>
                  <b>Alerta de falha</b>
                  <span>inversor offline, string zerada ou bateria em fim de ciclo</span>
                </li>
                <li>
                  <b>Operação e manutenção inclusas</b>
                  <span>limpeza, inspeção e relatório anual de geração</span>
                </li>
              </ul>

              <p className="note">
                Interface ilustrativa. Em produção, o monitoramento é o app do fabricante do
                inversor (Solis, GoodWe, Huawei, SolarEdge), integrado ao acompanhamento da Cerrado
                Solar.
              </p>
            </div>

            <figure className="shot shot--tall">
              <img
                src="/img/app-mao.jpg"
                alt="Mão segurando celular com o painel de monitoramento do sistema solar"
                loading="lazy"
                width={1100}
                height={1375}
              />
              <figcaption>App do inversor · geração, bateria e rede em tempo real</figcaption>
              <div className="shot__stats">
                <span>
                  <b>32,4 kWh</b> hoje
                </span>
                <span>
                  <b>86%</b> bateria
                </span>
                <span>
                  <b>0,3 kW</b> rede
                </span>
              </div>
            </figure>
          </div>

          <div className="wrap">
            <figure className="shot shot--wide">
              <img
                src="/img/dashboard-tablet.jpg"
                alt="Pessoa revisando o dashboard de geração solar em um tablet"
                loading="lazy"
                width={1600}
                height={900}
              />
              <figcaption>
                Relatório mensal de geração · comparação com o projeto e alerta de queda
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ---------------- CONTATO ---------------- */}
        <section className="section" id="contato">
          <div className="wrap contact">
            <div>
              <p className="kicker">
                <span className="idx">10</span> Próximo passo
              </p>
              <h2 className="display display--sm">
                Mande a conta.
                <br />
                <span className="sun">O resto é engenharia.</span>
              </h2>
              <p className="lede">
                Preencha os quatro campos. O WhatsApp abre com seus números preenchidos — a conversa
                começa no dado, não no &ldquo;olá&rdquo;.
              </p>

              <figure className="shot shot--team">
                <img
                  src="/img/equipe.jpg"
                  alt="Equipe de instalação da Cerrado Solar em frente à van de serviço"
                  loading="lazy"
                  width={1100}
                  height={1375}
                />
                <figcaption>Equipe própria · Planaltina, DF</figcaption>
              </figure>

              <div className="contact__side" style={{ marginTop: '2rem' }}>
                <div className="contact__item">
                  <span>WhatsApp</span>
                  <b>(61) 9 9999-9999 · demonstração</b>
                </div>
                <div className="contact__item">
                  <span>E-mail</span>
                  <b>{SITE.email}</b>
                </div>
                <div className="contact__item">
                  <span>Base</span>
                  <b>{SITE.address}</b>
                </div>
                <div className="contact__item">
                  <span>Atendimento</span>
                  <b>Planaltina, Sobradinho, Paranoá, São Sebastião e todo o DF</b>
                </div>
              </div>
            </div>

            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer__grid">
            <div>
              <div className="footer__brand">
                Cerrado
                <br />
                Solar<span className="dot">.</span>
              </div>
              <p style={{ maxWidth: '32ch' }}>
                Engenharia fotovoltaica em Planaltina e no Distrito Federal. Projeto, homologação,
                instalação, monitoramento 24/7 e assistência.
              </p>
            </div>
            <div>
              <h4>Navegar</h4>
              <ul>
                <li>
                  <a href="#diagnostico">Diagnóstico</a>
                </li>
                <li>
                  <a href="#metodo">Método</a>
                </li>
                <li>
                  <a href="#obras">Obras</a>
                </li>
                <li>
                  <a href="#financiamento">Financiamento</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li>
                  <a href={waLink('Olá, Cerrado Solar.')}>WhatsApp</a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </li>
                <li>{SITE.crea}</li>
                <li>CNPJ {SITE.cnpj}</li>
              </ul>
            </div>
          </div>

          <div className="footer__legal">
            <span>
              Protótipo demonstrativo · marca fictícia · dados de mercado com fonte pública
              (ABSOLAR, Greener, EPE, Portal Solar, Solar Task). Cases ilustrativos.
            </span>
            <span>
              Número de WhatsApp, e-mail, CREA e CNPJ são placeholders. Energia solar exige
              projeto e homologação — nenhum resultado é garantido antes da vistoria.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
