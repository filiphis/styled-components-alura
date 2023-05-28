import React, { useState } from "react";
import * as S from "./styled";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <S.Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <S.IconeTema
            className="imagem-icone"
            src={dinheiro}
            alt="Ícone Saldo"
          />
        </span>
        {toggleState ? (
          <S.Saldo>
            <S.Detalhe>R$</S.Detalhe> 0,00{" "}
          </S.Saldo>
        ) : null}
      </div>

      <S.Botao onClick={toggleHandler}>
        <S.IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </S.Botao>
    </S.Box>
  );
};

export default Conta;
