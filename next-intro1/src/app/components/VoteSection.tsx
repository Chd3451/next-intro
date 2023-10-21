import React from "react";
import { VoteButton } from "./VoteButton";

interface Button {
  name: string;
  element: React.ReactNode;
}

interface VoteSectionProps {
  section: Button[];
}

export const VoteSection: React.FC<VoteSectionProps> = ({ section }) => {
  return (
    <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
      {section.map((button) => {
        return (
          <VoteButton key={button.name} buttonLabel={button.name}>
            {button.element}
          </VoteButton>
        );
      })}
    </ul>
  );
};

