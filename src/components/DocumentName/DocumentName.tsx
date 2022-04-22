import React from "react";
import classnames from "classnames";
export interface DocumentNameProps
  extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  icon?: any;
  changeDocumentName?:()=>void;
}

const DocumentName = (props: DocumentNameProps) => {
  const { className, icon, label, ...rest } = props;
  return (
    <>
      {icon}
      <label className={classnames(`text-zinc-300 relative`,className)}>
        {label ? <span className="hidden md:block">{label}</span> : null}
        <input {...rest} className="bg-black/[0] text-zinc-100 border-b-[1px] w-full" id="document-name" type="text" />
      </label>
    </>
  );
};

export default DocumentName;
