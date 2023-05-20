import MenuItem, { MenuItemProps } from "@UI/molecules/MenuItem/MenuItem";

export type MenuProps = {
  items: MenuItemProps[];
  activeKey: string;
};

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <div className="w-16">
      {props.items.map((item) => (
        <MenuItem
          icon={item.icon}
          active={props.activeKey === item.key}
          key={item.key}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Menu;
