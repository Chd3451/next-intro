import React from "react";

export const FooterLink = (props: { linkText: string }) => {
  return (
    <>
      <span>&bull;</span>
      <a
        className="px-1 border-dashed border-b-2 border-b-yellow-js hover:border-black"
        href="https://github.com/Chd3451/next-intro.git"
        rel="nofollow noreferrer"
        target="_blank"
      >
        {props.linkText}
      </a>
    </>
  );
};
