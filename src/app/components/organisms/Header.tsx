import React from "react";
import { NavButton } from "../atoms/NavButton";
import { HeaderContent } from "../molecules/HeaderContent";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full mx-auto my-4 max-w-6xl">
      <HeaderContent headerTitle='🗳️Vota.dev' />
    </header>
  );
};
