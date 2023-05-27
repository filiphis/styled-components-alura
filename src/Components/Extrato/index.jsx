import React from "react";
// import * as S from "./styled";
import { Botao, Box } from "../Conta/styled";

import { extratoLista } from "../../info";

console.log("info", extratoLista);

export default function Extrato() {
  return (
    <Box>
      <h1>Extrato</h1>

      <Botao>Ver Mais</Botao>
    </Box>
  );
}
