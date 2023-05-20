import {
  Bars3Icon,
  CodeBracketIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export type IconProps = {
  type: "home" | "close" | "add" | "menu" | "menu-close" | "search";
  size?: "lg" | "md" | "sm";
  colored?: boolean;
};

const Icon: React.FC<IconProps> = (props) => {
  const style = [];
  switch (props.size) {
    case "lg":
      style.push("w-8", "h-8");
      break;
    case "md":
      style.push("w-6", "h-6");
      break;
    case "sm":
      style.push("w-4", "h-4");
      break;
    default:
      style.push("w-6", "h-6");
      break;
  }
  if (props.colored) {
    style.push("text-purple-500");
  } else {
    style.push("text-white");
  }
  const className = style.reduce(
    (previous, current) => previous + " " + current,
    ""
  );
  let icon = <CodeBracketIcon className={className} />;
  switch (props.type) {
    case "home":
      icon = <HomeIcon className={className} />;
      break;
    case "close":
      icon = <MinusCircleIcon className={className} />;
      break;
    case "add":
      icon = <PlusCircleIcon className={className} />;
      break;
    case "menu":
      icon = <Bars3Icon className={className} />;
      break;
    case "menu-close":
      icon = <XMarkIcon className={className} />;
      break;
    case "search":
      icon = <MagnifyingGlassIcon className={className} />;
      break;
    default:
      icon = <CodeBracketIcon className={className} />;
      break;
  }
  return icon;
};

export default Icon;
