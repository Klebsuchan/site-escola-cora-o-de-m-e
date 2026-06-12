# Escola Coração de Mãe - Landing Page

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black.svg)](https://www.framer.com/motion/)

Este é o repositório da landing page oficial da **Escola de Educação Infantil Coração de Mãe**, localizada em Passo Fundo - RS. O site foi desenvolvido com foco em performance, acessibilidade estrutural, SEO e conversão, proporcionando uma experiência acolhedora e informativa para as famílias.

## 🚀 Sobre o Projeto

A **Escola Coração de Mãe** atua como uma extensão do lar das crianças, unindo carinho e desenvolvimento cognitivo. O objetivo deste site é apresentar nosso propósito, missão, visão e valores, detalhar nossa metodologia sociointeracionista, diferenciais e parceiros da escola, além de facilitar o agendamento de visitas através da integração direta com o WhatsApp.

### 🌟 Principais Funcionalidades

- **Design Responsivo e Moderno:** Interface amigável e otimizada para dispositivos móveis (Mobile-First).
- **Animações Fluidas:** Utilização do `framer-motion` para transições e micro-interações que enriquecem a experiência visual.
- **Integração Rápida com WhatsApp:** Botões de CTA e um widget flutuante, direcionando diretamente para o atendimento da escola.
- **Seções Institucionais Detalhadas:** Apresentação da diretoria, coordenação, propósito, missão, visão, valores e detalhes da nossa metodologia de ensino.
- **Galeria e Parceiros:** Um mural ilustrando o ambiente escolar e aba de parceiros de destaque.
- **SEO Otimizado:** Implementação estrutural de SEO (Meta tags, Open Graph, Twitter Cards, Schema.org e Sitemap) visando a melhor posição nas buscas da região.
- **UX Aprimorado:** Scroll to top suave, ícones personalizados e contrastes avaliados.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema front-end:

- **[React](https://reactjs.org/)** & **[TypeScript](https://www.typescriptlang.org/)**: Para uma interface robusta e tipada.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build web incrivelmente ágil.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida e adaptável.
- **[Framer Motion](https://www.framer.com/motion/)**: Para orquestrar todas as transições fluidas e aparições.
- **[Lucide React](https://lucide.dev/)**: Ícones elegantes e consistentes.

## 📦 Instalação e Uso

Pré-requisitos: Você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/escola-coracao-de-mae.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd escola-coracao-de-mae
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

O site estará disponível localmente (geralmente em `http://localhost:3000` ou `http://localhost:5173`).

## 🏗️ Estrutura do Projeto

* `src/components/` - Componentes reutilizáveis que formam as seções da página.
  * `Hero.tsx` - Banner e chamada principal.
  * `AboutUs.tsx` e `Values.tsx` - Detalhamento da diretoria, equipe, missão, visão e valores.
  * `Methodology.tsx` - Fundamentos educacionais e metodologia.
  * `Services.tsx` - Área expositiva das instalações, horário flexível, etc.
  * `Gallery.tsx` & `Partners.tsx` - Murais e relacionamentos parceiros.
  * `FAQ.tsx` - Perguntas frequentes.
  * `Contact.tsx` & `FloatingWhatsApp.tsx` - Informações de contato e CTAs.
  * `ScrollToTop.tsx` - Utilitário de rolagem de volta ao topo.
  * `Header.tsx` & `Footer.tsx` - Navegação global e encerramento de página.
* `src/App.tsx` - Ponto unificador que monta as seções da página de pouso.
* `index.html` - Container global, preparado com todas as marcações de SEO.

## 📝 Licença

Este projeto foi desenvolvido sob medida para a Escola Coração de Mãe. Todos os direitos reservados quanto ao uso da marca, textos institucionais e imagens associadas (sujeitos a direitos autorais e de imagem). Para o código-fonte, aplicam-se as licenças das respectivas bibliotecas open-source utilizadas.
