import { Menu } from "@UI/organisms";
import React from "react";

export type SideBarProps = {};

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <div className="flex flex-col h-screen w-20">
      <Menu
        items={[
          {
            key: "home",
            icon: "home",
            label: "Home",
          },
        ]}
        activeKey={"home"}
      />
    </div>
  );
};

export default SideBar;
