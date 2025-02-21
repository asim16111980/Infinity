import { useState } from "react";
import { InputProps } from "../lib/definitions";

const Input = ({
  id,
  label,
  type,
  parentStyle,
  stateStyles,
  labelStyles,
  inputStyle,
}: InputProps) => {
  const [inputStateStyles, setInputStateStyles] = useState(stateStyles.enabled);
  const [inputLabelStyles, setInputLabelStyles] = useState(labelStyles.enabled);
  const [inputValidation, setInputValidation] = useState("success");
  return (
    <div
      className={`relative rounded border-2 ${parentStyle} ${inputStateStyles}`}
    >
      <input
        type={type}
        id={id}
        className={`w-full h-full border-none outline-none rounded peer ${inputStyle}`}
        placeholder=" "
        onMouseEnter={() => {
          inputStateStyles == stateStyles.focused
            ? ""
            : setInputStateStyles(stateStyles.hovered);
          setInputLabelStyles(labelStyles.hovered);
        }}
        onMouseLeave={() => {
          inputStateStyles == stateStyles.focused
            ? ""
            : setInputStateStyles(stateStyles.enabled);
          setInputLabelStyles(labelStyles.enabled);
        }}
        onFocus={() => {
          setInputStateStyles(stateStyles.focused);
          setInputLabelStyles(labelStyles.focused);
        }}
        onBlur={() => {
          inputValidation == "success" ? setInputStateStyles(stateStyles.populated);setInputLabelStyles(labelStyles.populated);
       :""
        }}
      />
      <label
        htmlFor={id}
        className={`absolute top-1/2 left-2 -translate-y-1/2 px-1 pointer-events-none peer-focus:scale-75 peer-focus:-top-1 peer-focus:bg-white peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:scale-75 transition-all ${inputLabelStyles}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
