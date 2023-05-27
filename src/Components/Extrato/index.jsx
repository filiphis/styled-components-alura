import React from "react";
// import * as S from "./styled";
import { Botao, Box } from "../Conta/styled";

import { extratoLista } from "../../info";
import Items from "../Items";

const despesas = extratoLista.despesas;

export default function Extrato() {
  return (
    <Box>
      <Items despesas={despesas} />
      {/* <Items /> */}
      <Botao>Ver Mais</Botao>
    </Box>
  );
}
