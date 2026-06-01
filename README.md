# MS TECH Portfolio

Portfolio institucional da MS TECH, um estúdio de web design e desenvolvimento focado em criar sites modernos, responsivos e orientados a resultado.

O projeto apresenta serviços, trabalhos recentes, habilidades, informações sobre a marca e formas de contato em uma landing page construída com React, Vite, TypeScript e Tailwind CSS.

## Visão Geral

Este site foi criado para comunicar a proposta da MS TECH de forma direta: unir design e desenvolvimento para entregar experiências digitais bonitas, rápidas e funcionais.

Principais seções:

- Hero com chamada principal e botões de navegação
- Serviços oferecidos
- Portfólio com projetos e links externos
- Diferenciais da MS TECH
- Skills técnicas
- Seção About Us
- Citações de marca
- Contato com Instagram e e-mail
- Botão de voltar ao topo

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React
- React Icons

## Estrutura Principal

```txt
src/
  assets/              Imagens e vídeos do projeto
  components/          Componentes visuais da página
  config/
    content.ts         Textos, links, projetos e dados do site
    theme.ts           Cores principais do tema
  styles/              Arquivos globais de estilo
  App.tsx              Ordem das seções da página
  main.tsx             Entrada da aplicação
```

## Onde Editar

Textos, projetos, links e redes sociais:

```txt
src/config/content.ts
```

Cores principais do site:

```txt
src/config/theme.ts
```

Ordem das seções:

```txt
src/App.tsx
```

Imagem e layout do About Us:

```txt
src/components/About.tsx
```

Cards e botões dos projetos:

```txt
src/components/Portfolio.tsx
```

## Como Rodar Localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

## Projetos do Portfólio

Os projetos são configurados em `src/config/content.ts`, dentro de `portfolioContent.projects`.

Cada projeto pode ter:

- título
- descrição
- desafio
- categoria
- imagem
- link externo
- tecnologias usadas

Exemplo:

```ts
{
  id: 1,
  title: 'E-Commerce Platform',
  description: 'A modern e-commerce platform built with React and Vite.',
  category: 'Web Development',
  image: 'src/assets/e-commerce.png',
  link: 'https://justmatheus2.github.io/e-commerce-page/',
  technologies: ['React', 'Vite', 'TypeScript']
}
```

## Build

O projeto foi validado com:

```bash
npm run build
```

## Observações

Arquivos e pastas como `node_modules`, `dist`, `.env`, `.claude` e configurações locais de editor são ignorados pelo Git através do `.gitignore`.
