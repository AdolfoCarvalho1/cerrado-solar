# Cerrado Solar — protótipo de site para integrador fotovoltaico

Protótipo one-page (Next.js 16 + App Router + TypeScript) para um integrador solar de Planaltina/DF.
Marca fictícia, conteúdo demonstrativo. Pesquisa de mercado em [`PESQUISA-MERCADO-SOLAR.md`](./PESQUISA-MERCADO-SOLAR.md).

## Rodar

```bash
npm install
npm run dev     # http://localhost:3410
# ou
npm run build && npm start
```

## O que tem

| Bloco | Função |
|---|---|
| Hero + simulador | slider de conta de luz → kWp, economia, retorno e investimento na hora |
| Panorâmica | 5 frames dirigidos pelo scroll (imagens em `public/img/`; placeholder até chegarem) |
| Diagnóstico | formulário completo + arranjo de painéis que cresce com o slider + resultado detalhado |
| Manifesto | posicionamento anti-commodity (projeto + homologação + O&M) |
| Método | 5 etapas com prazos (vistoria → projeto/ART → homologação → instalação → monitoramento) |
| Números | 77,3 GW, 4,6 mi sistemas, 5,6 kWh/m², 18% de conversão — com fonte |
| Obras | 3 casos ilustrativos com diagrama de telhado em SVG |
| Financiamento | conta × parcela em 25 anos + cronograma do Fio B |
| Baterias | preços de referência Amazon (17/11/2026) + venda sugerida (+35%) + banco de 10 kWh por referência de mercado |
| FAQ | 8 objeções reais respondidas (conta zerada, Fio B, noite, telhado, financiamento, garantia) |
| Conectividade | mockup de monitoramento + alertas, histórico e O&M |
| Contato | 4 campos → WhatsApp com a mensagem pré-preenchida |

## Imagens

As 20 fotos estão em `public/img/` (JPEG progressivo, 82%, 150–400 KB cada), já
aplicadas nas seções. A panorâmica consome `pano-01` a `pano-05`; obras usam
`pano-02`, `padaria`, `aerea-condominio`, `rural` e `galpao`.

Os prompts que geraram os assets estão em [`PROMPTS-CODEX.txt`](./PROMPTS-CODEX.txt).

## Modelo de cálculo (`lib/solar.ts`)

- Tarifa Neoenergia-DF: **R$ 1,05/kWh**
- Geração específica DF: **131 kWh/mês por kWp**
- Disponibilidade: **60 kWh/mês**
- Fio B 2026: **60%** sobre 70% da energia compensada, componente de **R$ 0,28/kWh**
- Investimento: **R$ 4.500/kWp** (≤4 kWp), **R$ 4.200** (≤8), **R$ 3.900** (≤15), menor acima
- Híbrido com bateria: **+34%**

Tudo declarado na interface. Nenhum número é apresentado como orçamento fechado.

## O que é mock

- Nome, telefone, e-mail, CREA e CNPJ são placeholders.
- Cases, economia e retorno dos cards são **ilustrativos**.
- Não há backend: o formulário valida no cliente e monta um link `wa.me`.
- `robots: noindex` ligado no layout.

## Acessibilidade e performance

- Auditoria axe-core (WCAG 2.1 AA): sem violações após ajuste da tabela rolável.
- Contraste checado; foco visível; `aria-live` no recálculo; `details/summary` nativos.
- Sem imagens de hero: LCP é tipográfico; HTML ~16 KB; DCL ~68 ms no build local.
