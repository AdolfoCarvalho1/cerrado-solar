# Mercado de energia solar — dossiê de pesquisa e briefing do protótipo

**Data:** 17/11/2026 · **Escopo:** mercado brasileiro de geração distribuída (GD) fotovoltaica, com recorte no DF/Planaltina · **Uso:** base para o protótipo `cerrado-solar`

---

## 1. Resumo executivo

1. O Brasil virou mercado de escala: **77,3 GW** de solar instalados (ABSOLAR, 30/09/2026), sendo **53,65 GW em geração distribuída** e 23,61 GW em geração centralizada. São **4,6 milhões de sistemas** de GD e **6,6 milhões de consumidores** atendidos.
2. O crescimento desacelerou com força: **-29% em 2025** e **-16% em novas conexões de GD no 1º semestre de 2026** (Greener). O mercado saiu da corrida por instalação e entrou em disputa por margem, recompra e pós-venda.
3. O integrador típico é pequeno: **53% das empresas têm até 4 pessoas**, fazem **25 orçamentos/mês** e fecham **18%** — 8 de cada 10 propostas morrem. **65%** apontam concorrência de preço como principal obstáculo.
4. O produto virou commodity (kit, placa, inversor). O que ainda diferencia é **engenharia, homologação, prazo e assistência** — exatamente o que quase nenhum site de instalador comunica.
5. No DF o recurso é excelente (**5,6 kWh/m²/dia**, ~**131 kWh/mês por kWp**) e a tarifa é alta (~**R$ 1,05/kWh**), o que produz payback de **3–5 anos** — argumento forte, mas já usado por todo mundo.
6. O visual do setor é homogêneo: em 66 sites solares analisados, **77,3% usam fundo branco**, **65,6% hero com foto full-bleed** e o acento é laranja (31,3%), verde (26,6%) ou azul (17,2%). **A oportunidade é de linguagem, não de argumento.**

---

## 2. Tamanho e momento do mercado

| Indicador | Valor | Fonte |
|---|---|---|
| Capacidade solar instalada (Brasil) | 77,3 GW (set/2026) | ABSOLAR |
| Geração distribuída | 53,65 GW | Canal Solar (dados ABSOLAR) |
| Geração centralizada | 23,61 GW | Canal Solar (dados ABSOLAR) |
| Sistemas de GD | 4,6 milhões | Portal Solar (2026) |
| Consumidores beneficiados | 6,6 milhões | Portal Solar (2026) |
| Novas conexões GD, 1º sem/2026 | -16% vs 1º sem/2025 | Greener |
| Contração do mercado em 2025 | -29% | ABSOLAR (via Canal Solar) |
| Projeção de adições 2026 | 3,9 GW | ABSOLAR |
| Investimentos projetados 2026 | R$ 31,8 bi (-20% vs 2025) | BNamericas |

**Leitura:** o teto não é mais "quantos instalam", é "quem sobrevive à commoditização". Em 2022 o integrador fazia 42 orçamentos/mês; hoje faz 25. A conversão caiu de 20% para 18%.

---

## 3. Cadeia de valor e quem ganha dinheiro

```
Fabricante (Trina, JA, LONGi, Jinko, Sungrow, GoodWe, Huawei, SolarEdge…)
        ↓
Distribuidor de kit (Aldo Solar/Renovigi, Solfácil Distribuidora, etc.)
        ↓
Integrador (projeto, instalação, homologação)  ← elo mais fragmentado
        ↓
Consumidor (PF residencial, PJ pequeno comércio, rural)
```

Camadas adjacentes que já capturam valor:

- **Crédito:** Solfácil (R$ 4 bi concedidos, 145 mil sistemas, ticket médio ~R$ 22 mil, prazo até 10 anos), Meu Financiamento Solar (controlado pelo Banco BV), bancos (BV, Santander, BB), cooperativas (Sicoob, Sicredi), consórcio.
- **Marketplace de integradores:** Portal Solar (franquias), Solar Task (159 instaladores cadastrados só em Brasília, 259 projetos ativos).
- **Geração compartilhada:** Órigo e similares — assinatura de créditos, sem obra; desconto típico de 10–15%, hoje sob pressão de churn.
- **Software/CRM:** Groner e afins (proposta, WhatsApp, acompanhamento de obra).

**Onde está a margem do integrador:** projeto bem dimensionado + homologação sem retrabalho + pós-venda (limpeza, monitoramento, manutenção). **85% dos integradores já foram procurados por "clientes órfãos"** — gente cujo instalador sumiu. Isso é ao mesmo tempo um problema do setor e uma demanda reprimida.

---

## 4. Economia unitária do integrador (o que o site precisa resolver)

| Métrica | 1º sem/2025 | 1º sem/2026 |
|---|---|---|
| Orçamentos/mês por empresa | 20 | 25 |
| Sistemas vendidos/mês | 4 | 5 |
| Taxa de conversão | 20% | 18% |
| Vendas financiadas | 41% | 33% (44% no CO) |
| Empresas com equipe ≤ 4 pessoas | — | 53% |
| Integradores com casos de inversão de fluxo | 28% | 38% |
| Projetos não concretizados | 34% | 18% |

Fonte: Greener, estudo SED, 1º sem/2026 (434 respostas válidas, margem ~5 p.p.).

Consequências diretas para o site:
1. **Cada lead vale muito** — 82% das propostas não viram venda; qualificar antes da visita técnica é o gargalo.
2. **Financiamento é decisivo no CO** (44% das vendas) — mostrar parcela, não só preço.
3. **Inversão de fluxo** (rede não aceita mais injeção) exige projeto conservador e discurso honesto: dimensionar para autoconsumo, não para "zerar".
4. **Pós-venda é produto** — 53% já oferecem O&M; 85% receberam pedido de cliente órfão.

---

## 5. Regulação, preço e retorno

### Lei 14.300/2022 (marco legal da GD)
- Micro e mini GD até 75 kW, compensação de créditos por até 60 meses.
- Quem protocolou **até 07/01/2023**: isento do Fio B até **31/12/2045**.
- Depois disso, cobrança progressiva do **Fio B** sobre a energia compensada:

| Ano | Fio B |
|---|---|
| 2023 | 15% |
| 2024 | 30% |
| 2025 | 45% |
| **2026** | **60%** |
| 2027 | 75% |
| 2028 | 90% |
| 2029+ | regra definitiva (ANEEL) |

### Preço de referência (turnkey, 2026)
- Greener (jun/2026): **R$ 3,62/Wp** em 2 kWp; **R$ 2,91/Wp** em 4 kWp; **R$ 2,02/Wp** em 30 kWp.
- Referência EPE 2026: **R$ 3,08/Wp** (residencial).
- DF (Greener jan/2026 + prêmio local): **~R$ 3.400/kWp** residencial 4–8 kWp; comercial ~R$ 2.800/kWp.
- Kit subiu ~18% no 1º sem/2026; pressão de custo de até 35% no ano (prata, fim de incentivo chinês).

### Retorno (DF)
- Irradiação: **5,6 kWh/m²/dia**; **~131 kWh/mês por kWp** instalado.
- Projeto mediano em Brasília (Solar Task, 259 projetos): **3,87 kWp**, **R$ 13.563**, conta de **R$ 440/mês**, economia **~R$ 302/mês**, payback **~3,7 anos**.
- Payback nacional 2026: **2,7 a 4,8 anos** (EPE R$ 3,08/Wp); 3,5–5 anos no CO com preço real de mercado.

---

## 6. Mercado local — DF e Planaltina

- Distribuidora: **Neoenergia Brasília** (ex-CEB). Tarifa residencial ~**R$ 1,05/kWh** (varia com bandeira e classe).
- Brasília passou de **530 MW** de geração própria distribuída.
- **159 instaladores** cadastrados em Brasília (Solar Task) — mercado fragmentado e com forte concorrência de preço.
- Nomes ativos no DF/Planaltina: Own Energy Engenharia, ILUMIFORT, Conceptu, RB Energia Solar, Solar House, Potência Solar, Módulo Energia, Knova Solar (atua explicitamente em Planaltina).
- Planaltina: perfil de renda média, casas com telhado cerâmico, comércio de rua e propriedades rurais no entorno. O discurso vencedor é **previsibilidade da conta** e **parcela ≈ conta**, não "sustentabilidade".

---

## 7. Jornada de compra e objeções (o que o site tem que responder)

Ciclo real: **anúncio/indicação → WhatsApp → foto da conta → faixa de economia → visita técnica → proposta → assinatura → homologação → instalação**.

Objeções que travam a venda e como tratar:

| Objeção | Resposta que funciona |
|---|---|
| "Está caro" | Comparar conta atual x parcela do financiamento, lado a lado, no mesmo período |
| "Vou pensar" | Dar resumo de 1 página com números do próprio imóvel + data de retorno |
| "Já ouvi história ruim" | Mostrar processo, equipe, ART/CREA, fotos de obras, garantia e pós-venda |
| "E se eu me mudar?" | Sistema é do imóvel; créditos e valorização transferem com a casa |
| "Meu vizinho pagou menos" | Diferenciar potência, equipamento, estrutura e homologação — proposta item a item |
| "E à noite / dia nublado?" | Créditos compensam; geração média mensal, não pico |
| "Fio B vai acabar com a economia?" | Números de 2026 (60%) já no cálculo; economia segue positiva |

---

## 8. Benchmark de sites — o que o setor faz e onde está o buraco

Amostra de 66 sites solares (Createtoday, 2025/2026):
- **77,3%** fundo branco/quase branco.
- **65,6%** hero com texto sobre foto full-width.
- Acento: **laranja/âmbar 31,3%**, verde 26,6%, azul 17,2%, lime 6,3%.
- Mediana de 5 links no menu.

Referências fortes:
- **Sunrun (EUA):** "Price. Quality. Confidence." + 1 milhão de casas instaladas. Prova em escala, tom doméstico, oferta com incentivo.
- **Enpal (DE):** hero fotográfico com pessoa ao centro, selo de teste (CHIP), dois CTAs (check da casa / saber mais), barra de confiança (0 € entrada, economia, independência). Alta densidade, zero ambiguidade.
- **1KOMMA5° (DE):** roxo profundo + preto + branco, eyebrow verde-água, headline gigante, muito respiro. Premium por restrição cromática e tipografia.
- **Tesla Energy:** minimalismo, produto como herói, quase nenhum texto.
- **Otovo:** marketplace, foco em comparar instaladores ("power protected").

**Conclusão do benchmark:** o setor inteiro converge para "foto de telhado + fundo branco + botão verde/amarelo". Isso funciona, mas é visualmente invisível. **Há espaço para uma marca de engenharia: fundo escuro, tipografia enorme, dados reais na tela e calculadora como peça central** — sem sacrificar conversão (CTA e prova continuam presentes).

---

## 9. Posicionamento recomendado para o protótipo

> **Não vender "economia de 95%". Vender "projeto verificado, homologação inclusa e 25 anos de assistência" — com número na tela em 8 segundos.**

Pilares:
1. **Diagnóstico, não orçamento:** o site entrega potência, investimento, economia e payback a partir da conta de luz, antes de pedir nome.
2. **Anti-commodity:** método de 5 etapas, ART/CREA, homologação na Neoenergia, monitoramento e O&M.
3. **Transparência regulatória:** Fio B de 2026 já embutido; nada de promessa de "conta zerada".
4. **Handoff inteligente:** o diagnóstico vira mensagem de WhatsApp com os números preenchidos — o lead chega qualificado.
5. **Linguagem de engenharia:** dark, tipográfico, dados em mono, linhas finas, sol amarelo como único acento.

---

## 10. Briefing do protótipo entregue

- **Marca:** Cerrado Solar — engenharia fotovoltaica (Planaltina/DF). Fictícia, demonstrativa.
- **Direção de arte:** modo claro "meio-dia" — branco quente (oklch 0.985), azul de céu e azul institucional, sol amarelo apenas como acento gráfico. Tipografia Anton (display) + Archivo (texto) + IBM Plex Mono (dados), hairlines e grid editorial.
- **Stack:** Next.js 16 (App Router), TypeScript, CSS próprio com tokens **OKLCH**, fontes via `next/font`.
- **Página:** one-page com 10 blocos — hero + simulador, panorama dirigida por scroll, diagnóstico completo com arranjo de painéis dinâmico, manifesto, método, números de mercado, obras, financiamento + Fio B, baterias com preço de referência, FAQ, conectividade e contato.
- **Imagens:** shot list de 20 imagens com prompts prontos para o Codex em `PROMPTS-IMAGENS-CODEX.md`; a panorâmica consome `public/img/pano-01` a `pano-05` automaticamente (e cai num placeholder desenhado enquanto não existirem).
- **Calculadora:** conta de luz → consumo → kWp → módulos/área → investimento (R$ 4.500/4.200/3.900 por kWp conforme porte, no DF) → economia líquida com Fio B 60% → payback → CO₂ evitado. `aria-live` no resultado, validação só no blur/submit.
- **Premissas declaradas na interface:** tarifa R$ 1,05/kWh, 131 kWh/kWp/mês, Fio B 60%, 70% da energia passando pela rede, R$ 0,28/kWh de componente Fio B.
- **Mobile:** o simulador sobe para logo abaixo da manchete (grid areas), garantindo a ferramenta na primeira dobra.
- **Não faz:** backend, CRM, envio real de e-mail. O CTA monta `wa.me` com o diagnóstico no texto.
- **Conteúdo:** cases e depoimentos são **ilustrativos**; números de mercado têm fonte pública e estão citados no rodapé.

---

## 11. Fontes

- ABSOLAR — capacidade instalada e projeções: https://www.absolar.org.br/
- Canal Solar — 77,6 GW e dados GD/GC: https://canalsolar.com.br/setor-solar-supera-projecoes-apesar-desafios/
- Portal Solar — dados de mercado 2026: https://www.portalsolar.com.br/mercado-de-energia-solar-no-brasil.html
- Greener / Canal Solar — integradores, conversão, O&M: https://canalsolar.com.br/integradores-ampliam-vendas-53-aponta-greener
- PV Magazine — 69% da GD em sistemas até 12 kWp: https://pv-magazine-brasil.com/2026/03/27/greener-sistemas-de-ate-12-kwp-concentram-69-da-gd-no-brasil
- Bloomberg Línea — Solfácil, ticket médio R$ 22 mil: https://bloomberglinea.com.br/startups/fintech-de-energia-solar-solfacil-levanta-r-1-bi-em-fidc-para-sustentar-expansao
- Setor Energético — preço e Fio B 2026: https://setorenergetico.com.br/energia-solar-residencial-quanto-custa
- Energímetro — payback por capital: https://energimetro.com.br/pt/payback-energia-solar-residencial
- Solar Task — retrato solar de Brasília: https://solartask.com.br/brasilia
- EcoSunPower — preços DF 2026: https://ecosunpower.eng.br/blog/quanto-custa-sistema-solar-brasilia-2026/
- Planaltina 1859 — empresas de solar no DF: https://planaltina1859.com.br/melhores-empresas-energia-solar-df/
- Createtoday — análise de 66 sites solares: https://createtoday.io/examples?category=solar
- Pravaah — melhores sites de energia 2026: https://www.pravaahconsulting.com/post/best-renewable-energy-website-designs
