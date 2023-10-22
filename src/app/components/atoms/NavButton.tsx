import React from "react";

export const NavButton = (props: { borderColor: string, buttonBg: string, textColor: string, buttonLabel: string }) => {
  return (
    <button className={`${props.buttonBg} border-2 ${props.borderColor} rounded-lg mx-2`}>
      <a
        href="/#"
        className={`py-3 text-base font-semibold px-7 ${props.textColor} hover:opacity-60`}
      >
        {props.buttonLabel}
      </a>
    </button>
  );
};
