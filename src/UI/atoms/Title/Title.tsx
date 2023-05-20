import React from "react";

export type TitleProps = {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
  color?: "primary" | "secondary";
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = (props) => {
  const style = ["font-bold"];

  switch (props.type) {
    case "h1":
      style.push("text-6xl");
      break;
    case "h2":
      style.push("text-5xl");
      break;
    case "h3":
      style.push("text-4xl");
      break;
    case "h4":
      style.push("text-3xl");
      break;
    case "h5":
      style.push("text-2xl");
      break;
    case "h6":
      style.push("text-xl");
      break;
    case "h7":
      style.push("text-lg");
      break;
    default:
      style.push("text-2xl");
      break;
  }

  switch (props.color) {
    case "primary":
      style.push("text-purple-500");
      break;
    default:
      style.push("text-white");
      break;
  }

  return (
    <h1
      className={style.reduce(
        (previous, current) => previous + " " + current,
        ""
      )}
    >
      {props.children}
    </h1>
  );
};

export default Title;
