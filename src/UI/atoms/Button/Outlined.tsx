export type OutlinedProps = {
  type?:
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "primary"
    | "secondary"
    | "text";
  children: React.ReactNode;
  onClick?: () => void;
};

export const Outlined: React.FC<OutlinedProps> = (props) => {
  const style = [
    "border-2",
    "rounded-full",
    "px-4",
    "py-2",
    "text-white",
    "drop-shadow-md",
    "bg-transparent",
    "hover:cursor-pointer",
  ];

  switch (props.type) {
    case "success":
      style.push("border-green-500", "hover:bg-green-600");
      break;
    case "danger":
      style.push("border-rose-500", "hover:bg-rose-600");
      break;
    case "warning":
      style.push("border-amber-500", "hover:bg-amber-600");
      break;
    case "info":
      style.push("border-cyan-500", "hover:bg-cyan-600");
      break;
    case "secondary":
      style.push("border-gray-500", "hover:bg-gray-600");
      break;
    case "text":
      style.push("border-transparent", "drop-shadow-none");
      break;
    default:
      style.push("border-purple-500", "hover:bg-purple-600");
      break;
  }

  return (
    <button
      className={style.reduce(
        (previous, current) => previous + " " + current,
        ""
      )}
      onClick={props.onClick || (() => {})}
    >
      {props.children}
    </button>
  );
};
