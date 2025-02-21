import { useState } from "react";
import { InputProps } from "../lib/definitions";

const Input = ({
  id,
  label,
  type,
  parentStyle,
  stateStyles,
  inputStyle,
}: InputProps) => {
  const [inputState, setInputState] = useState({
    hovered: false,
    focused: false,
    populated: false,
    disabled: false,
  });
  return (
    <div className={`relative rounded ${parentStyle} ${inputState.hovered?stateStyles.hovered:''}`}>
      <input
        type={type}
        id={id}
        className={`w-full h-full border-none outline-none rounded peer ${inputStyle}`}
        placeholder=" "
        onMouseEnter={() => setInputState({ ...inputState, hovered: true })}
      />
      <label
        htmlFor={id}
        className="absolute top-1/2 left-2 -translate-y-1/2 px-1 pointer-events-none peer-focus:scale-75 peer-focus:-top-1 peer-focus:bg-white peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:scale-75 transition-all"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;