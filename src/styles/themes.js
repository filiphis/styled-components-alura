import {
  conteudoClaro,
  fundoClaro,
  textoFundoClaro,
  conteudoEscuro,
  fundoEscuro,
  textoFundoEscuro,
} from "./variaveis";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  texto: textoFundoClaro,
  filter: "",
};

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  texto: textoFundoEscuro,
  filter: "invert(100%)",
};
