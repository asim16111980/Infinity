// This file contians data types definitions with Typescript

import { HTMLInputTypeAttribute } from "react";

// Input State Styles interface
interface InputStateStyles {
  enabled: { parent: string; input: string; label: string };
  hovered: { parent: string; input: string; label: string };
  focused: { parent: string; input: string; label: string };
  disabled: { parent: string; input: string; label: string };
  success: { parent: string; input: string; label: string };
  error: { parent: string; input: string; label: string };
}

// Input props interface
interface InputProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  stateStyles: InputStateStyles;
}
// Button State Styles interface
interface ButtonStateStyles {
  enabled: string;
  hovered: string;
  focused: string;
  pressed: string;
  disabled: string;
}

// Button props interface
interface ButtonProps {
  type: "button" | "submit";
  icon?: string | React.ReactNode;
  value: string;
  stateStyles: ButtonStateStyles;
}

export type { InputProps, ButtonProps };
