import React from "react";
import { FooterLink } from "../atoms/FooterLink";

export const FooterContent = ({ footerLinks }) => {
  return (
    <div className="">
      <div className="flex justify-center">
        <a
          className="flex pr-2 border-dashed border-b-4 border-b-yellow-js hover:border-black mb-4"
          href="https://github.com/Chd3451/next-intro.git"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;
          <picture className="flex flex-center rounded-full">
            <img
              width="92"
              height="28"
              loading="lazy"
              src="https://midu.dev/logo.png"
              alt="midudev logo"
            />
          </picture>
        </a>
      </div>
      {footerLinks.map(link => <FooterLink key={link} linkText={link} />)}
    </div>
  );
};
