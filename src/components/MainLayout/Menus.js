import React from "react";
//import config from "./config";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;
const routes = []
function customMenu(menu) {
  if (menu.name) {
    return (
      <Menu.Item key={menu.key}>
        <Link to={menu.path}>
          <span>
            {menu.icon && <menu.icon />}
            <span>{menu.name || menu.path}</span>
          </span>
        </Link>
      </Menu.Item>
    );
  }
  return null;
}

function Menus(props) {
  const menuList = routes
    .filter((e) => e.name)
    .map((item, index) => {
      if (item.routes) {
        return (
          <SubMenu
            key={"sub" + index + 1}
            title={
              <span>
                {item.icon && <item.icon />}
                <span>{item.name || item.path}</span>
              </span>
            }
          >
            {item.routes
              .filter((e) => e.name)
              .map((element, i) => customMenu({ ...element, key: i }))}
          </SubMenu>
        );
      }
      return customMenu({ ...item, key: "menu" + index });
    });

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      {menuList}
    </Menu>
  );
}
export default Menus;
