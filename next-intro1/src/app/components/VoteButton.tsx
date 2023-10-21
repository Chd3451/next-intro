import React, { ReactNode } from "react";

interface VoteButtonProps {
  children: ReactNode;
  buttonLabel: string;
}

export const VoteButton: React.FC<VoteButtonProps> = ({ children, buttonLabel }) => {
  return (
    <button className="pointer group">
      <div className="flex flex-row items-center gap-2 px-8 py-3 border border-gray-200 rounded-3xl">
        <figure className="relative flex object-contain w-10 h-10">
          {children}
        </figure>
        <div className="text-2xl font-semibold text-gray-700">{buttonLabel}</div>
      </div>
    </button>
  );
};
