import { Paragraph, IconOutlined, Icon } from "@UI/atoms";

export type MenuItemProps = {
  active?: boolean;
  icon: "home" | "close" | "add" | "menu" | "menu-close" | "search";
  label?: string;
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div
      className={`w-16 h-16 flex flex-row justify-center items-center ${
        !props.active && "hover:cursor-pointer"
      }`}
    >
      {props.active && (
        <hr className="w-1 h-10 bg-purple-600 relative left-0 rounded-full border-purple-600" />
      )}
      <div className="flex flex-col w-full justify-center items-center">
        {props.active ? (
          <Icon type={props.icon} size="md" colored />
        ) : (
          <IconOutlined type={props.icon} size="md" />
        )}
        {!props.active && <Paragraph type="details">{props.label}</Paragraph>}
      </div>
    </div>
  );
};

export default MenuItem;
