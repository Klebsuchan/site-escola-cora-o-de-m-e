# Escola Coração de Mãe - Landing Page

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black.svg)](https://www.framer.com/motion/)

Este é o repositório da landing page oficial da **Escola de Educação Infantil Coração de Mãe**, localizada em Passo Fundo - RS. O site foi desenvolvido com foco em performance, acessibilidade e conversão, proporcionando uma experiência acolhedora e informativa para os pais.

## 🚀 Sobre o Projeto

A **Escola Coração de Mãe** atua como uma extensão do lar das crianças, unindo carinho e desenvolvimento cognitivo. O objetivo deste site é apresentar a infraestrutura, o propósito e os diferenciais da escola, além de facilitar o agendamento de visitas através de integrações diretas com o WhatsApp.

### 🌟 Principais Funcionalidades

- **Design Responsivo e Moderno:** Interface amigável e otimizada para dispositivos móveis (Mobile-First).
- **Animações Fluidas:** Utilização do `framer-motion` para transições e micro-interações que enriquecem a experiência visual.
- **Integração Rápida com WhatsApp:** Botões de Chamada para Ação (CTA) em toda a página e um widget flutuante, direcionando diretamente para o WhatsApp da coordenação.
- **Galeria Dinâmica de Fotos:** Um mural ilustrando o ambiente, atividades diárias e momentos especiais.
- **Seção de Perguntas Frequentes (FAQ):** Respostas claras sobre funcionamento, alimentação (acompanhada por nutricionista e app Agenda) e matrículas.
- **Mapa Integrado:** Localização facilitada através do Google Maps integrado.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema front-end:

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, garantindo um código mais seguro e previsível.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida para projetos web modernos.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para uma estilização rápida e responsiva.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca poderosa para criação de animações em React.
- **[Lucide React](https://lucide.dev/)**: Ícones elegantes e consistentes em SVG.

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

O site estará disponível localmente. Por padrão, o Vite geralmente roda na porta `3000` (ou `5173`).

## 🏗️ Estrutura do Projeto

* `src/components/` - Componentes reutilizáveis que formam as seções da página.
  * `Hero.tsx` - Seção inicial de impacto.
  * `About.tsx` / `Services.tsx` - Áreas que explicam a proposta e atividades.
  * `Gallery.tsx` - Galeria de imagens do ambiente escolar.
  * `FAQ.tsx` - Perguntas frequentes (estrutura em 'accordion').
  * `Contact.tsx` - Informações de contato, mapas e horários.
  * `Header.tsx` & `Footer.tsx` - Navegação e rodapé globais.
* `src/App.tsx` - Ponto de montagem principal unindo todas as seções.
* `src/index.css` - Estilos globais e injeção do Tailwind CSS.

## 📝 Licença

Este projeto foi desenvolvido sob medida para a Escola Coração de Mãe. Todos os direitos reservados quanto ao uso da marca, textos institucionais e imagens associadas (sujeitos a direitos autorais e de imagem). Para o código-fonte, aplicam-se as licenças das respectivas bibliotecas open-source utilizadas.
