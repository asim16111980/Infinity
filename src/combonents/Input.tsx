import { InputProps } from "../lib/definitions";
import { useState } from "react";

const Input = ({ id, label, type, stateStyles }: InputProps) => {
  const [inputStateStyles, setInputStateStyles] = useState(stateStyles.enabled);
  // const [inputPopulated, setInputPopulated] = useState(false);
  return (
    <div className={`relative rounded border-2 ${inputStateStyles.parent}`}>
      <input
        type={type}
        id={id}
        className={`w-full h-full border-none outline-none rounded p-2 peer ${inputStateStyles.input}`}
        placeholder=" "
        onMouseEnter={() => {
          inputStateStyles == stateStyles.focused
            ? ""
            : setInputStateStyles(stateStyles.hovered);
        }}
        onMouseLeave={() => {
          inputStateStyles == stateStyles.focused
            ? ""
            : setInputStateStyles(stateStyles.enabled);
        }}
        onFocus={() => {
          setInputStateStyles(stateStyles.focused);
        }}
        onBlur={() => {setInputStateStyles(stateStyles.enabled)}}
      />
      <label
        htmlFor={id}
        className={`absolute top-1/2 left-2 -translate-y-1/2 px-1 pointer-events-none peer-focus:scale-75 peer-focus:-top-1 peer-focus:bg-white peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:scale-75 transition-all ${inputStateStyles.label}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
