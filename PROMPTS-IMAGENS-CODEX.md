# 20 imagens para o site — shot list e prompts para o Codex

**Projeto:** Cerrado Solar (protótipo) · **Data:** 17/11/2026
**Direção de arte:** fotografia editorial/documental, luz de fim de tarde no Cerrado, céu azul profundo, terra vermelha, branco quente, azul e amarelo solar. Nada de texto, logo, marca d'água ou gente posando para banco de imagens.

---

## Como usar no Codex

1. Gere **uma imagem por vez** (o modelo fica melhor com um prompt por vez).
2. Cole o **prompt em inglês** — ele renderiza melhor — e use o formato indicado.
3. Salve com o **nome de arquivo exato** da lista e jogue em `public/img/` do projeto. O site já está preparado para consumir esses nomes.
4. Se a imagem vier com texto estranho, mãos deformadas ou painéis tortos, repita com o bloco **Negative** no fim.
5. Prioridade: gere primeiro as **5 da panorâmica (01–05)**, depois bateria (09–11) e conectividade (19–20). O resto entra depois.

**Bloco de estilo** (pode colar no fim de qualquer prompt para manter a unidade):

```
Editorial documentary photography, Brazilian Cerrado, late afternoon golden light,
deep blue sky with high cirrus clouds, red earth and dry grass, warm white and
cobalt blue palette, subtle sun flare, 35mm equivalent, f/5.6, natural color
grading, fine grain, photorealistic, no text, no logo, no watermark.
```

**Negative padrão:**

```
text, letters, watermark, logo, cartoon, CGI render, plastic skin, deformed hands,
extra fingers, warped panels, fisheye, oversaturated green, HDR halo, fake bokeh,
crowded composition, stock-photo smile.
```

---

## BLOCO A — Panorâmica (sequência que corre com o scroll)

### 01 · `public/img/pano-01-cerrado.jpg` — 21:9
**Onde entra:** primeiro frame da panorâmica, logo abaixo do hero.
**Prompt:**
```
Ultra-wide editorial photograph of a ground-mounted solar array in the Brazilian
Cerrado at golden hour: rows of dark monocrystalline panels leading toward a low
sun on the horizon, red earth and dry golden grass between rows, a lone cerrado
tree silhouetted at the right edge, deep cobalt sky with thin high clouds, warm
dust in the air, low camera angle at 1.2m height, 24mm lens, f/8, sun flare
grazing the panel glass, no people, no buildings, photorealistic, cinematic,
21:9 composition with generous sky.
```

### 02 · `public/img/pano-02-telhado.jpg` — 21:9
**Onde entra:** segundo frame — "o projeto começa no telhado".
**Prompt:**
```
Wide editorial photograph of a single-story Brazilian house in Planaltina, DF,
with a ceramic tile roof covered by a neat array of dark solar panels, warm
afternoon light raking across the tiles, white walls, mango tree at the side,
clothesline and a low garden wall, deep blue sky, a few soft clouds, 28mm lens,
slightly elevated viewpoint from a neighboring roof, documentary realism,
photorealistic, no people, no text, 21:9.
```

### 03 · `public/img/pano-03-instalador.jpg` — 21:9
**Onde entra:** terceiro frame — "quem instala é gente".
**Prompt:**
```
Wide documentary photograph of two solar installers working on a residential
roof in the Brazilian Cerrado: one kneeling and tightening a mounting clamp on a
solar panel, the other holding the next module, both wearing plain navy work
shirts, gloves, safety glasses and harness, red ceramic tiles, tools and rails in
the foreground, dramatic late-afternoon backlight, dust and warm flare, 35mm
lens, f/4, shallow depth of field on the hands and clamp, candid, photorealistic,
no visible brand, no text, 21:9.
```

### 04 · `public/img/pano-04-familia.jpg` — 21:9
**Onde entra:** quarto frame — "a conta vira previsibilidade".
**Prompt:**
```
Wide cinematic photograph inside a bright Brazilian middle-class kitchen at
morning: a mother and a teenage daughter at the counter, natural window light,
white cabinets, blue accents, a kettle steaming, a small inverter display glowing
on the wall in the background, warm domestic atmosphere, 35mm lens, f/2.8,
candid expressions, no eye contact with camera, photorealistic, editorial
lifestyle, no text, 21:9.
```

### 05 · `public/img/pano-05-cidade.jpg` — 21:9
**Onde entra:** quinto frame — "e continua depois do pôr do sol".
**Prompt:**
```
Wide dusk photograph of a Brazilian city skyline at blue hour seen from a
residential rooftop with solar panels silhouetted in the foreground, warm
windows lighting up across the city, deep indigo sky with the last orange band on
the horizon, a few street lights, 35mm lens, f/5.6, long exposure feel, calm and
premium, photorealistic, no text, 21:9.
```

---

## BLOCO B — Hero e apoio

### 06 · `public/img/modulo-macro.jpg` — 16:9
**Onde entra:** card de detalhe técnico / fundo da seção de diagnóstico.
**Prompt:**
```
Extreme close-up of a monocrystalline solar panel at a low grazing angle, deep
blue cells with thin silver busbars, a bright sun reflection sliding across the
glass, micro-texture of the frame and water droplets, blurred red earth
background, 90mm macro lens, f/4, razor-sharp foreground, warm late-afternoon
light, photorealistic, abstract and premium, no text, 16:9.
```

### 07 · `public/img/aerea-condominio.jpg` — 16:9
**Onde entra:** seção de obras / prova de escala.
**Prompt:**
```
Aerial drone photograph of a Brazilian residential condominium with dozens of
houses, several rooftops fitted with solar panels, palm trees and lawns, long
shadows from late afternoon sun, deep blue sky, 24mm equivalent, f/5.6, crisp
detail, documentary real estate photography, photorealistic, no text, 16:9.
```

### 08 · `public/img/engenheira-tablet.jpg` — 4:5
**Onde entra:** seção de método (vertical, ao lado dos 5 passos).
**Prompt:**
```
Vertical editorial portrait of a Brazilian female solar engineer in her 30s
standing in front of a wall-mounted hybrid inverter and battery, holding a tablet
with a generation graph, wearing a navy polo and a white hard hat under her arm,
confident calm expression looking slightly off-camera, warm side light, garage
concrete wall, shallow depth of field, 50mm lens, f/2, photorealistic, no text,
4:5.
```

---

## BLOCO C — Bateria e autonomia

### 09 · `public/img/bateria-wall.jpg` — 3:2
**Onde entra:** topo da seção de baterias.
**Prompt:**
```
Clean product-in-context photograph of a slim white wall-mounted lithium battery
next to a modern hybrid inverter on a light concrete garage wall, neat conduit and
a small status LED, soft daylight from the side, a bicycle and a tool shelf softly
blurred at the edge, 35mm lens, f/4, architectural digest style, photorealistic,
no brand marks, no text, 3:2.
```

### 10 · `public/img/rack-baterias.jpg` — 3:2
**Onde entra:** card "banco de baterias / expansão".
**Prompt:**
```
Detailed photograph of a rack of stacked lithium iron phosphate battery modules
in a technical room, matte grey enclosures, tidy red and black cables, breaker
panel and labeled conduits, cool white light mixed with a warm window glow,
28mm lens, f/5.6, symmetrical composition, industrial-clean, photorealistic, no
brand, no text, 3:2.
```

### 11 · `public/img/casa-noite.jpg` — 16:9
**Onde entra:** card "backup / autonomia".
**Prompt:**
```
Architectural photograph of a modern Brazilian house at night, warm interior
lights and garden lights on, solar panels faintly visible on the roof under
moonlight, deep blue sky, a few stars, pool reflection, long exposure, 24mm lens,
f/5.6, premium real estate photography, photorealistic, no people, no text, 16:9.
```

---

## BLOCO D — Negócios e rural

### 12 · `public/img/padaria.jpg` — 3:2
**Onde entra:** card de obra comercial (padaria/mercearia).
**Prompt:**
```
Documentary photograph of a small Brazilian bakery storefront on a quiet street
in Planaltina, DF, warm interior light spilling onto the sidewalk, a few solar
panels visible on the flat roof above the sign, an employee opening the shutter,
late afternoon, 35mm lens, f/4, authentic small-business atmosphere, no readable
sign text, no brand, photorealistic, 3:2.
```

### 13 · `public/img/rural.jpg` — 16:9
**Onde entra:** card de obra rural.
**Prompt:**
```
Wide photograph of a Brazilian rural property in the Cerrado with a ground-mounted
solar array beside a barn, a water tank and a fence, red earth track leading into
the frame, dry golden pasture, deep blue sky, late afternoon light, 24mm lens,
f/8, documentary agriculture photography, photorealistic, no people, no text,
16:9.
```

### 14 · `public/img/galpao.jpg` — 16:9
**Onde entra:** card de obra comercial de grande porte.
**Prompt:**
```
Aerial three-quarter view of a large warehouse with a metal roof fully covered by
solar panels, loading docks and trucks below, asphalt yard, long shadows, late
afternoon, 24mm equivalent, f/5.6, crisp industrial detail, documentary drone
photography, photorealistic, no logos, no text, 16:9.
```

---

## BLOCO E — Método, equipe e detalhe

### 15 · `public/img/equipe.jpg` — 4:5
**Onde entra:** seção de contato, prova de humanidade.
**Prompt:**
```
Vertical environmental portrait of a three-person Brazilian solar installation
team standing in front of a white service van in a residential driveway, navy
uniforms without logos, one holding a hard hat, relaxed and confident, late
afternoon side light, 50mm lens, f/2.8, shallow depth of field, documentary
portrait, photorealistic, no text, 4:5.
```

### 16 · `public/img/fixacao-telha.jpg` — 1:1
**Onde entra:** detalhe no bloco de método.
**Prompt:**
```
Macro photograph of a solar mounting hook fixed to a red ceramic roof tile,
aluminum rail and stainless bolt in sharp focus, craftsman's gloved hand holding a
torque wrench, shallow depth of field, warm afternoon light, dust on the tile,
90mm macro lens, f/4, photorealistic, no text, 1:1.
```

### 17 · `public/img/art-mesa.jpg` — 3:2
**Onde entra:** card "projeto e ART".
**Prompt:**
```
Overhead photograph of a technical desk: printed single-line electrical diagram,
a stamped ART document, mechanical pencil, scale ruler, laptop showing a solar
layout, coffee cup, warm window light from the left, 35mm lens, f/4, organized
and precise, photorealistic, no readable text, no logo, 3:2.
```

### 18 · `public/img/inversor-display.jpg` — 1:1
**Onde entra:** detalhe no método/conectividade.
**Prompt:**
```
Close-up of a modern hybrid solar inverter display showing a generation graph and
power figures, soft blue glow on brushed metal, cables neatly connected below,
dark technical room background, 50mm lens, f/2.8, shallow depth of field,
photorealistic, no readable text, no brand, 1:1.
```

---

## BLOCO F — Conectividade

### 19 · `public/img/app-mao.jpg` — 4:5
**Onde entra:** seção de conectividade, mockup principal.
**Prompt:**
```
Vertical photograph of a hand holding a smartphone in front of a blurred solar
roof at golden hour, the screen showing a clean energy monitoring dashboard with a
blue bar chart and a large power figure (no readable text), warm bokeh, 50mm lens,
f/2, photorealistic, modern and premium, no logo, 4:5.
```

### 20 · `public/img/dashboard-tablet.jpg` — 16:9
**Onde entra:** seção de conectividade, tela secundária.
**Prompt:**
```
Over-the-shoulder photograph of a person at a wooden desk reviewing a solar
monitoring dashboard on a tablet, graph and system status cards in blue and white,
natural window light, plant and notebook at the edge of the frame, 35mm lens,
f/2.8, shallow depth of field, photorealistic, no readable text, no logo, 16:9.
```

---

## Checklist de consistência

- [ ] Todas com o mesmo sol baixo e o mesmo azul de céu.
- [ ] Nenhuma com texto legível, logo ou marca d'água.
- [ ] Pessoas com pele e mãos naturais; nada de sorriso de banco de imagens.
- [ ] Painéis sempre retos, com moldura prateada e células azul-escuras.
- [ ] Telhado cerâmico vermelho ou metálico claro — nunca telhado genérico cinza.
- [ ] Terra vermelha e vegetação seca do Cerrado nas externas.
- [ ] Cortes com espaço para texto à esquerda ou no terço inferior.
