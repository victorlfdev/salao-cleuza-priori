# Cleuza Priori

Landing page institucional para o salão de beleza Cleuza Priori, desenvolvida com `Next.js 16`, `React 19`, `TypeScript` e `Tailwind CSS 4`.

O projeto foi estruturado para concentrar o conteúdo em um único arquivo de dados, facilitando manutenção de textos, links, mídias e CTAs sem espalhar conteúdo pelos componentes.

## Stack

- `Next.js 16` com App Router
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `framer-motion` para animações de entrada e transições
- `gsap` + `ScrollTrigger` + `lenis` para suavização e comportamento de rolagem
- `lucide-react` para ícones

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Como rodar localmente

### Pré-requisitos

- `Node.js 20+`
- `npm`

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:3000`.

### Produção local

```bash
npm run build
npm run start
```

## Estrutura do projeto

```text
app/
  layout.tsx              # layout global e metadata
  page.tsx                # composição da landing page
  globals.css             # tokens visuais e estilos globais

components/
  landing/                # seções da página
  ui/                     # componentes reutilizáveis de interface
  SmoothScroll.tsx        # integração Lenis + GSAP

data/
  landing.ts              # conteúdo central da landing

lib/
  links.ts                # geração de links de contato, WhatsApp, Maps, Instagram
  utils.ts                # utilitários gerais

public/
  beauty/                 # imagens, vídeos e peças da marca
```

## Onde editar

### Conteúdo principal

Edite `data/landing.ts` para alterar:

- nome do negócio
- descrição
- telefone e WhatsApp
- Instagram, Linktree e Google Maps
- hero principal
- serviços
- galeria
- depoimentos
- FAQ
- CTA final
- links do rodapé

Esse arquivo é a principal fonte de verdade da landing.

### Metadados e SEO

Revise `app/layout.tsx` e `app/page.tsx`.

Hoje existem URLs placeholder com `https://example.com` em:

- `metadataBase`
- `openGraph.url`
- JSON-LD da `BeautySalon`

Antes de publicar, substitua pelo domínio real do projeto.

### Mídia e identidade visual

Arquivos estáticos ficam em `public/beauty/`.

Você pode trocar:

- logo
- imagens da galeria
- imagens dos serviços
- vídeo e poster do hero
- imagem de Open Graph

Se alterar nomes de arquivos, atualize também os caminhos em `data/landing.ts` ou `app/layout.tsx`.

### Links e contato

Os links principais são montados em `lib/links.ts`, incluindo:

- telefone
- Instagram
- Google Maps
- Linktree
- link principal com mensagem para WhatsApp

Se quiser mudar a mensagem padrão do WhatsApp, ajuste `DEFAULT_WHATSAPP_MESSAGE` nesse arquivo.

## Seções atuais da landing

- hero com vídeo
- prova social
- serviços
- seção de experiência
- galeria
- Instagram
- localização
- depoimentos
- FAQ
- CTA final
- footer

## Observações técnicas

- `SmoothScroll.tsx` desativa a rolagem suavizada em dispositivos touch e para usuários com `prefers-reduced-motion`.
- A tipografia usa `Manrope` e `Cormorant Garamond` via `next/font/google`.
- As cores e superfícies estão centralizadas em variáveis CSS dentro de `app/globals.css`.
- O projeto usa aliases como `@/components`, `@/data` e `@/lib`.

## Deploy

O projeto pode ser publicado em qualquer ambiente compatível com `Next.js`, como Vercel, VPS ou serviços com suporte a Node.js.

Fluxo básico:

```bash
npm install
npm run build
npm run start
```

Antes do deploy, revise:

- domínio real no SEO e JSON-LD
- links de contato
- imagens finais
- textos com dados oficiais do salão

## Licença

Este repositório não define uma licença pública no momento.
