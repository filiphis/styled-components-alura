import React from "react";
import Item from "../Item";
import * as S from "./styled";

export default function Items({ despesas }) {
  return (
    <S.Wrapper>
      {despesas.map((despesa) => (
        <Item key={despesa.id} {...despesa} />
      ))}
    </S.Wrapper>
  );
}
