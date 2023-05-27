import React from "react";
import * as S from "./styled";

import Titulo from "../Titulo";
import Conta from "../Conta";

const Container = () => {
  return (
    <S.Container>
      <Titulo>Olá Fulano!</Titulo>
      <S.Conteudo>
        <Conta />
      </S.Conteudo>
    </S.Container>
  );
};

export default Container;
