import React from "react";
import Menu from "../CustomIcons/MenuIcon";
export interface NavProps extends React.ComponentPropsWithoutRef<"button"> {
  logoTitle?: string;
  children?: React.ReactNode;
  menuOpen?: boolean;
}

const Navigation = ({ logoTitle, menuOpen, children, ...props }: NavProps) => {
  return (
    <nav className="w-full h-full flex items-center gap-2 relative">
      <button
        className=" flex flex-shrink-0 h-14 w-14 justify-center items-center bg-zinc-400"
        {...props}
      >
        <Menu className="m-4" open={menuOpen} />
      </button>
      <h1 className="tracking-[8px] h-10 text-lg font-bold border-r-2 border-zinc-400 px-4 leading-10 hidden md:block">
        {logoTitle}
      </h1>
      {children}
    </nav>
  );
};

export default Navigation;
