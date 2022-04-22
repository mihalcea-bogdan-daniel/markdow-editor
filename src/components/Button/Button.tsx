import React from "react";
import classnames from "classnames"
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label?: string;
  icon?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { className, icon, label, ...rest } = props;
  return (
    <button
      className={classnames(`
      bg-orange-400 
      rounded p-[7px] 
      cursor-pointer 
      hover:bg-orange-600 
      active:bg-orange-900 
      flex
      gap-[5px]`,
      className)}
      {...rest}
    >
      {icon}
      {label?<span className="hidden md:block">{label}</span> : null}
      
    </button>
  );
};

export default Button;
