# 🎨 Website Profissional 100% Editável

> Um website de web developer moderno, responsivo e **totalmente personalizável** sem precisar mexer no código!

![Status](https://img.shields.io/badge/Status-Pronto%20para%20Edi%C3%A7%C3%A3o-success)
![Editável](https://img.shields.io/badge/Editabilidade-100%25-blue)
![Documentação](https://img.shields.io/badge/Docs-Completa-green)

---

## ✨ Características

- ✅ **100% Editável** - Mude tudo sem mexer no código
- ✅ **Totalmente Responsivo** - Funciona em todos os dispositivos
- ✅ **Animações Modernas** - Efeitos suaves e profissionais
- ✅ **Fácil de Usar** - Documentação completa incluída
- ✅ **Pronto para Produção** - Deploy imediato

---

## 🚀 Início Rápido

### 1️⃣ Edite o Conteúdo
```typescript
// Abra: src/config/content.ts
// Mude textos, imagens, projetos, etc.
```

### 2️⃣ Personalize as Cores
```typescript
// Abra: src/config/theme.ts
// Altere a paleta de cores
```

### 3️⃣ Salve e Veja!
Abra no navegador e veja suas mudanças! 🎉

---

## 📚 Documentação

### 🎯 Começar Agora
- 📖 **[LEIA-ME-PRIMEIRO.md](LEIA-ME-PRIMEIRO.md)** - Introdução completa
- 🚀 **[src/config/README.md](src/config/README.md)** - Guia rápido de edição

### 📋 Guias Completos
- 📚 **[EDITAR-SITE.md](EDITAR-SITE.md)** - Guia detalhado passo a passo
- 💡 **[src/config/EXEMPLO-EDICAO.md](src/config/EXEMPLO-EDICAO.md)** - Exemplos práticos
- 🗺️ **[src/config/ESTRUTURA-ARQUIVOS.md](src/config/ESTRUTURA-ARQUIVOS.md)** - Mapa dos arquivos

### ⚡ Referências Rápidas
- 📄 **[COMO-EDITAR.txt](COMO-EDITAR.txt)** - Referência rápida
- 📑 **[src/config/INDEX.md](src/config/INDEX.md)** - Índice completo

---

## 📁 Estrutura do Projeto

```
seu-website/
│
├── 📝 README.md                    ← Você está aqui
├── 📖 LEIA-ME-PRIMEIRO.md          ← Comece por aqui!
├── 📚 EDITAR-SITE.md               ← Guia completo
├── 📄 COMO-EDITAR.txt              ← Referência rápida
│
├── src/
│   ├── config/                     ← 🎯 ARQUIVOS EDITÁVEIS
│   │   ├── content.ts              ← Textos e conteúdo
│   │   ├── theme.ts                ← Cores e tema
│   │   ├── INDEX.md                ← Índice de ajuda
│   │   ├── README.md               ← Guia rápido
│   │   ├── EXEMPLO-EDICAO.md       ← Exemplos práticos
│   │   └── ESTRUTURA-ARQUIVOS.md   ← Mapa detalhado
│   │
│   └── app/
│       ├── App.tsx                 ← Aplicação principal
│       └── components/             ← Componentes React
│
└── package.json                    ← Dependências
```

---

## 🎯 O Que Você Pode Editar

### ✏️ Em `src/config/content.ts`:
- 🏢 Nome da empresa/logo
- 📝 Todos os textos do site
- 🖼️ Imagens de todas as seções
- 💼 Lista de serviços
- 🎨 Projetos do portfólio
- 👤 Textos "Sobre nós"
- 🛠️ Skills e tecnologias
- 💬 Citações motivacionais
- 📧 Email e redes sociais
- 🔗 Links de navegação

### 🎨 Em `src/config/theme.ts`:
- 🌈 Cor principal (primária)
- 🎨 Cor secundária
- 🖌️ Cores de fundo
- ✍️ Cores de texto
- 🔲 Cores de bordas

---

## 🎓 Como Usar Este Projeto

### Para Iniciantes
1. Leia: **[LEIA-ME-PRIMEIRO.md](LEIA-ME-PRIMEIRO.md)**
2. Abra: `src/config/content.ts`
3. Mude o nome da empresa
4. Mude o email
5. Salve e veja!

### Para Personalização Completa
1. Leia: **[EDITAR-SITE.md](EDITAR-SITE.md)**
2. Consulte: **[src/config/EXEMPLO-EDICAO.md](src/config/EXEMPLO-EDICAO.md)**
3. Edite `content.ts` e `theme.ts`
4. Personalize tudo!

---

## 🎨 Seções Incluídas

- 🏠 **Hero** - Apresentação principal impactante
- 💼 **Services** - Lista de serviços oferecidos
- 🖼️ **Portfolio** - Showcase de projetos
- 👤 **About** - Sobre você/sua empresa
- ⭐ **Why Us** - Seus diferenciais
- 🛠️ **Skills** - Tecnologias e habilidades
- 💬 **Quotes** - Citações inspiracionais
- 📧 **Contact** - Formulário de contato
- 📱 **Footer** - Rodapé com links

---

## 🛠️ Tecnologias

- ⚛️ React 18.3
- 🎨 Tailwind CSS v4
- ✨ Motion (Framer Motion)
- ⚡ Vite 6
- 💙 TypeScript
- 🎭 Lucide Icons

---

## ⚡ Comandos Úteis

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Build para produção
pnpm build
```

---

## 📝 Edição Rápida

### Mudar Nome da Empresa
```typescript
// src/config/content.ts
export const siteConfig = {
  siteNamePart1: 'SEU',     // ← Mude aqui
  siteNamePart2: 'NOME',    // ← Mude aqui
}
```

### Mudar Cores
```typescript
// src/config/theme.ts
export const colors = {
  primary: '#e91e63',      // ← Rosa → Mude aqui
  secondary: '#00bcd4',    // ← Ciano → Mude aqui
}
```

### Adicionar Projeto
```typescript
// src/config/content.ts → portfolioContent.projects
{
  id: 7,  // Próximo ID
  title: 'Seu Projeto',
  category: 'Web Development',
  image: 'URL_DA_IMAGEM',
  technologies: ['React', 'TypeScript']
}
```

---

## ✅ Checklist de Personalização

- [ ] Nome da empresa atualizado
- [ ] Cores personalizadas
- [ ] Título e descrição principais alterados
- [ ] Email e redes sociais corretos
- [ ] Projetos do portfólio adicionados
- [ ] Serviços atualizados
- [ ] Seção "Sobre" personalizada
- [ ] Skills/tecnologias atualizadas
- [ ] Imagens trocadas
- [ ] Todos os links testados

---

## 🆘 Suporte

### Precisa de Ajuda?

1. 📖 Leia a documentação em `src/config/`
2. 💡 Veja exemplos em `EXEMPLO-EDICAO.md`
3. 🗺️ Consulte o mapa em `ESTRUTURA-ARQUIVOS.md`

### Problemas Comuns

| Problema | Solução |
|----------|---------|
| Site não atualiza | Recarregue com Ctrl+F5 |
| Erro de sintaxe | Verifique aspas e vírgulas |
| Imagem não aparece | Verifique a URL |
| Cor não muda | Use formato #RRGGBB |

---

## 📄 Licença

Este projeto é totalmente seu para personalizar e usar como quiser! 🎉

---

## 🎉 Pronto para Começar?

### 👉 Próximo Passo: Abra [LEIA-ME-PRIMEIRO.md](LEIA-ME-PRIMEIRO.md)

---

<div align="center">

**Desenvolvido com ❤️ usando React + Tailwind + Motion**

🌟 **100% Personalizável** • 📱 **Totalmente Responsivo** • ⚡ **Fácil de Usar**

</div>
