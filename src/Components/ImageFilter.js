import React from "react";
import restaurante from "../assets/images/alimentacao.svg";
import utilidades from "../assets/images/utilidades.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import outros from "../assets/images/outros.svg";
import { IconeTema } from "./Conta/styled";

const ImageFilter = (type) => {
  const Images = {
    Restaurante: <IconeTema src={restaurante} alt="Restaurante" />,
    Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
    Saude: <IconeTema src={saude} alt="Saude" />,
    Transporte: <IconeTema src={transporte} alt="Transporte" />,
    outros: <IconeTema src={outros} alt="Outros" />,
  };

  return Images[type] || Images.outros;
};

export default ImageFilter;
