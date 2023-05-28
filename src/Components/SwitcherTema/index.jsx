import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icone } from "../Conta/styled";

export default function SwitcherTema({ tema }) {
  const icon = tema ? <Icone src={themeOn} /> : <Icone src={themeOff} />;
  return icon;
}
