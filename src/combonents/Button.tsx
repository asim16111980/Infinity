import { ButtonProps } from "../lib/definitions";
import { useState } from "react";

const Button = ({ type, icon, value, stateStyles }: ButtonProps) => {
  const [ButtonStateStyles, setButtonStateStyles] = useState(
    stateStyles.enabled
  );
  return (
    <button className={`border-0 ${ButtonStateStyles}`}
      type={type}
      onMouseEnter={() => {
        ButtonStateStyles == stateStyles.focused
          ? ""
          : setButtonStateStyles(stateStyles.hovered);
      }}
      onMouseLeave={() => {
        ButtonStateStyles == stateStyles.focused
          ? ""
          : setButtonStateStyles(stateStyles.enabled);
      }}
      onFocus={() => {
        setButtonStateStyles(stateStyles.focused);
      }}
      onBlur={() => {
        setButtonStateStyles(stateStyles.enabled);
      }}
      onClick={() => {
        setButtonStateStyles(stateStyles.pressed);
      }}
    >
      {icon}
      <span>{value}</span>
    </button>
  );
};

export default Button;
