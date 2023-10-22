import React, { ReactNode } from "react";
import { VoteButton } from "../atoms/VoteButton";

export const VoteSection = (props: { section: {name: string, element?: ReactNode}[] }) => {
  return (
    <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
      {props.section.map((button) => {
        return (
          <VoteButton key={button.name} buttonLabel={button.name}>
            {button.element}
          </VoteButton>
        );
      })}
    </ul>
  );
};
