import React from "react";
import { Button } from "./Button";

export const VoteSection = ({ section }) => {
  return (
    <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
      {section.map((button) => {
        return <Button key={button.name} buttonLabel={button.name}>{button.element}</Button>;
      })}
    </ul>
  );
};
