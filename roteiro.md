# Roteiro do curso

## Aula 01 - Apresentando o Styled Components

- [x] Versão do node tem que ser a **16.16.0**
- [x] Clonar o repositório com o projeto.
- [x] Instalar o pacote styled-components `npm install styled-components@latest`
- [x] Criar o styled component `Titulo`

## Aula 02 - GlobalStyle | Variáveis | Props

- [x] Criar o componente `GlobalStyle` para os estilos globais.
  - [x] `import {createGlobalStyle} from 'styled-components'`.
  - [x] Armazenar os estilos dentro de `createGlobalStyle`.
  - [x] Utilizar o componente `GlobalStyle` no `App`.
- [x] Importar a fonte através do index.html.
- [x] Criar o arquivo `variaveis.js` para salvar as variáveis de estilos.
- [x] No componente `Cabecalho` criar o S.Componente `StyledHeader`.
- [x] Importar as variáveis para utilizar no `StyledHeader`.
- [x] Criar o S.Componente `Logo`.
- [x] Criar o S.Componente `BtnCabecalho` utilizando props para reaproveitar o estilo.

## Aula 03 - Herança | Media Query

- [x] Refatorar o componente `Container` criando os S.componentes `Container` e `Conteudo`.
- [x] Criar o S.componente `Icone` para a img com classe imagem-icon.
- [x] Criar o S.componente `IconeMargin` e herdar os estilos do S.componente `Icone`.
- [x] refatorar o componente `Conta`:
  - [x] Criar o S.componente `Box`.
  - [x] Criar o S.componente `Saldo`.
  - [x] Criar o S.componente `Detalhe`.
  - [x] Criar o S.componente `Botao`.
- [x] Utilizar o @media em seus S.componentes.

## Aula 04 -

- [ ] Criar o componente `Extrato`
  - [x] Importar o componente `<Box`
  - [x] Importar o componente `<Button>Ver Mais</Button>`
  - [x] Importar a listagem de extrato do arquivo `info.json`.
  - [x] Importar o componente `Extrato` no componente `Container`.
  - [x] Criar o componente/S.componente `Items` e utiliza-lo no componente `Extrato`.
  - [x] Criar o componente/S.componente `Item` e seus estilos.
  - [x] Criar o arquivo `ImageFilter.js` para decidir qual ícone utilizar.
    - [x] Importar as imagens necessárias e o componente `Icone`.

## Aula 05 - Utilizando Temas no StyledComponents

- [x] Criar as variáveis para o tema escuro.
- [x] Criar o arquivos `temas.js` que será responsável por importar as variáveis e exportar os temas `temaClaro` e `temaEscuro`.
- [ ] Para utilizar os temas é necessário importar o `ThemeProvider` no componente `App`
- [x] no componente `App` também é necessário importar os temas que criarmos em no arquivo `temas.js`.
- [x] Nos S.components onde o estilo será mudado conforme o tema, é necessário informar que o valor da propriedade será manipulado pelo `ThemeProvider` do Styled Components. Por exemplo: `color: ${(theme) => theme.corDoTexto}`
- [x] Criar o componente `BtnTema`, que será responsável por alterar entre os temas.
- [x] Criar o componente `SwitcherTema`. Será responsável por alterar os ícones do componente `Icone`.
- [x] Criar o estado `tema` e a função `toggleTema` para alterar entre os temas. Devem ficar dentro do `App`.
- [x] Alterar também a cor dos ícones ao trocar de tema.
