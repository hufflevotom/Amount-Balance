import React from "react";

export type ParagraphProps = {
  type?: "details" | "paragraph";
  children: React.ReactNode;
};

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const style = ["text-left"];

  switch (props.type) {
    case "details":
      style.push("text-xs", "text-white", "mt-1");
      break;
    default:
      style.push("text-base", "text-white");
      break;
  }

  return (
    <span
      className={style.reduce(
        (previous, current) => previous + " " + current,
        ""
      )}
    >
      {props.children}
    </span>
  );
};

export default Paragraph;
