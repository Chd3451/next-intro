import React from "react";
import { NavButton } from "../atoms/NavButton";

export const HeaderContent = (props: { headerTitle: string }) => {
  return (
    <>
      <h2 className="text-black text-xl font-bold">{props.headerTitle}</h2>
      <div className="flex justify-between items-center">
        <NavButton
          buttonLabel="Sign In"
          borderColor="border-white"
          buttonBg="bg-white"
          textColor="text-dark"
        />
        <NavButton
          buttonLabel="Sign Up"
          borderColor="border-black"
          buttonBg="bg-black"
          textColor="text-white"
        />
      </div>
    </>
  );
};
