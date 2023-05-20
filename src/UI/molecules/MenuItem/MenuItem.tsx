import { Icon } from "../../atoms/Icon";
import { Title } from "../../atoms/Title";

export type MenuItemProps = {
  active?: boolean;
  icon: "home" | "close" | "add" | "menu" | "menu-close" | "search";
  label?: string;
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div>
      <Icon type={props.icon} size="lg" colored={props.active} />
      <Title type="h7" color={props.active ? "primary" : "secondary"}>
        {props.label}
      </Title>
    </div>
  );
};

export default MenuItem;
