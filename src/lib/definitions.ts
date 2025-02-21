// This file contians data types definitions with Typescript

import { HTMLInputTypeAttribute } from "react";

// StateStyles interface
interface StateStyles {
  enabled: string;
  hovered: string;
  focused: string;
  populated: string;
  disabled: string;
  error: string;
}

// Input props interface
interface InputProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  parentStyle: string;
  stateStyles: StateStyles;
  labelStyles: StateStyles;
  inputStyle: string;
}

export type { InputProps };
