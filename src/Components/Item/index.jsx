import React from "react";
import * as S from "./styled";
import ImageFilter from "../ImageFilter";

export default function Item({ type, value, date, from }) {
  return (
    <S.Wrapper>
      {ImageFilter(type)}
      <S.Conteudo>
        <S.Tipo>{type}</S.Tipo>
        <span>{from}</span>
        <span>{value}</span>
      </S.Conteudo>
      <span>{date}</span>
    </S.Wrapper>
  );
}
