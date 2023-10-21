import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full mx-auto my-4 max-w-6xl">
      <h1 className="text-black text-xl font-bold">🗳️Vota.dev</h1>
      <div className="flex justify-between items-center">
        <button className="bg-white border-2 border-white rounded-lg mx-2">
          <a
            href="/#"
            className="py-3 text-base font-semibold px-7 text-dark hover:opacity-60"
          >
            Sign In
          </a>
        </button>
        <button className="bg-black border-2 border-black rounded-lg mx-2">
          <a
            href="/#"
            className="py-3 text-base font-semibold text-white rounded-lg  px-7 hover:opacity-60"
          >
            Sign Up
          </a>
        </button>
      </div>
    </header>
  );
};
