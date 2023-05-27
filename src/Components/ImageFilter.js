import React from "react";
import restaurante from "../assets/images/alimentacao.svg";
import utilidades from "../assets/images/utilidades.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import outros from "../assets/images/outros.svg";
import { Icone } from "./Conta/styled";

const ImageFilter = (type) => {
  const Images = {
    Restaurante: <Icone src={restaurante} alt="Restaurante" />,
    Utilidades: <Icone src={utilidades} alt="Utilidades" />,
    Saude: <Icone src={saude} alt="Saude" />,
    Transporte: <Icone src={transporte} alt="Transporte" />,
    outros: <Icone src={outros} alt="Outros" />,
  };

  return Images[type] || Images.outros;
};

export default ImageFilter;
