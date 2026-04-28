# AGENTS.md

## Objetivo do projeto

Landing page institucional do salao Cleuza Priori, feita com `Next.js 16`, `React 19`, `TypeScript` e `Tailwind CSS 4`.

O projeto prioriza:

- conteudo centralizado em `data/landing.ts`
- secoes independentes em `components/landing/*`
- componentes visuais reutilizaveis em `components/ui/*`
- identidade visual controlada por variaveis CSS em `app/globals.css`

## Stack e comandos

- `npm run dev`: ambiente local
- `npm run build`: build de producao
- `npm run start`: serve a build
- `npm run lint`: validacao com ESLint

Antes de encerrar uma alteracao relevante, rode ao menos `npm run lint`. Se mexer em estrutura, metadata, imports ou tipagem, prefira validar tambem com `npm run build`.

## Estrutura importante

- `app/layout.tsx`: fonts, metadata global e Open Graph
- `app/page.tsx`: composicao da landing e JSON-LD
- `app/globals.css`: tokens de cor, tipografia, superficies e utilitarios globais
- `data/landing.ts`: fonte principal de verdade para textos, CTAs, links e paths de midia
- `lib/links.ts`: montagem de links de telefone, WhatsApp, Instagram, Maps e Linktree
- `components/landing/*`: secoes da pagina
- `components/ui/*`: primitives reutilizaveis de interface
- `public/beauty/*`: imagens, video e assets da marca

## Convencoes do projeto

- Mantenha textos, arrays de cards, galerias, FAQ, depoimentos e CTAs em `data/landing.ts` sempre que fizer sentido. Evite hardcode de conteudo dentro das secoes.
- Reutilize `lib/links.ts` para links de contato. Nao replique logica de WhatsApp, telefone ou Maps dentro dos componentes.
- Preserve o padrao visual existente: tons champagne/rose/dourado, superficies claras, serif para destaque e layout premium.
- Ao criar novas secoes, siga a composicao atual: dados em `data/landing.ts`, secao em `components/landing`, e insercao ordenada em `app/page.tsx`.
- Ao criar componentes compartilhados, coloque-os em `components/ui` apenas se houver reutilizacao real.
- Use os aliases configurados (`@/components`, `@/data`, `@/lib`) em vez de imports relativos longos.

## Cuidados especificos

- `app/layout.tsx` e `app/page.tsx` ainda contem URLs placeholder com `https://example.com`. Se a tarefa envolver SEO ou deploy, substitua pelo dominio real.
- `landingData.hero.poster` aponta para `/beauty/hero-premium.svg`, mas os assets atuais devem sempre ser conferidos em `public/beauty` antes de alterar referencias.
- `beforeAfter.items` em `data/landing.ts` usa imagens `.svg`. Confirme existencia real dos arquivos antes de manter ou expandir essa secao.
- `lib/links.ts` depende de normalizacao de telefone e WhatsApp no formato brasileiro. Preserve essa logica.
- Componentes com `"use client"` usam `framer-motion`, `gsap` e scroll suave; evite mover esses trechos para Server Components sem necessidade.

## Quando editar cada area

- Conteudo, copy, FAQ, servicos, depoimentos, links e midia: `data/landing.ts`
- SEO, metadata, Open Graph, JSON-LD e dominio: `app/layout.tsx` e `app/page.tsx`
- Cores, espacamentos globais, gradients e utilitarios: `app/globals.css`
- Comportamento de CTA e links de contato: `lib/links.ts`
- Layout ou markup de uma secao especifica: `components/landing/<Secao>.tsx`

## Regras para futuros agentes

- Nao reestruture o projeto sem necessidade clara. A arquitetura atual e simples e intencional.
- Nao introduza uma camada de CMS, estado global ou fetch remoto para conteudo que hoje vive em `data/landing.ts`, a menos que isso seja pedido explicitamente.
- Nao troque a direcao visual por um design generico. Preserve o carater editorial/premium existente.
- Nao altere nomes de arquivos em `public/beauty` sem atualizar todas as referencias relacionadas.
- Se encontrar inconsistencia entre dados e assets, corrija a referencia ou registre isso explicitamente na resposta final.

## Checklist rapido antes de concluir

- O conteudo continua centralizado onde deveria?
- Os links de contato continuam vindo de `lib/links.ts`?
- As referencias de imagens e video existem em `public/beauty`?
- `npm run lint` passou?
- Se houve mudanca de SEO ou tipagem estrutural, `npm run build` passou?
