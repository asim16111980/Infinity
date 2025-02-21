// This file contians data types definitions with Typescript

import { HTMLInputTypeAttribute } from "react";

// StateStyles interface
interface StateStyles {
  enabled: {parent:string,input:string,label:string};
  hovered:{parent:string,input:string,label:string};
  focused:{parent:string,input:string,label:string};
  disabled:{parent:string,input:string,label:string};
  success: {parent:string,input:string,label:string};
  error: {parent:string,input:string,label:string};
}

// Input props interface
interface InputProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  stateStyles: StateStyles;
}

export type { InputProps };
