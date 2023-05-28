import React, { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./styles/themes";
import SwitcherTema from "./Components/SwitcherTema";
import { BtnTema } from "./Components/BtnTema";

function App() {
  const [tema, setTema] = useState(false);

  function toggleTema() {
    setTema(!tema);
  }
  return (
    <>
      <ThemeProvider theme={tema ? temaEscuro : temaClaro}>
        <GlobalStyle />
        <BtnTema onClick={toggleTema}>
          <SwitcherTema tema={tema} />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
