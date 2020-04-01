import React from "react";
//import config from "./config";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import Icon from "components/Icon"
const { SubMenu } = Menu;

function CustomMenu(menu) {
  let MenuIcon  = Icon[menu.icon];
    return (
      <Menu.Item key={menu.name} >
        <Link to={menu.path}>
          <span>
            {MenuIcon && <MenuIcon />}
            <span>{menu.name || menu.path}</span>
          </span>
        </Link>
      </Menu.Item>
    );
}

function getMenuList(menus){
  return menus.map((item, index) => {
    if (item.children) {
      let MenuIcon  = Icon[item.icon];
      return (
        <SubMenu
          key={item.name}
          title={
            <span>
               {MenuIcon && <MenuIcon />}
              <span>{item.name}</span>
            </span>
          }
        >
          {item.children ? getMenuList(item.children) : null}
        </SubMenu>
      );
    }
    return CustomMenu(item)
  });
}
function Menus({ menus }) {
  
  const menuList = getMenuList(menus)
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      {menuList}
    </Menu>
  );
}
export default Menus;
