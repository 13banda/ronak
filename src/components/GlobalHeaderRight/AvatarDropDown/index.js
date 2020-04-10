import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined
} from "@ant-design/icons";
import "./index.less";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div style={{ padding: "10px 15px", display: "flex" }}>
      <Avatar src={user.picture} />
      <div style={{ marginLeft: 10 }}>
  <p style={{ marginTop: 3, marginBottom: 0 }}>{user.name}</p>
      </div>
    </div>
  );
}
function AvatarDropDown({ user,logout }) {
   function handleMenuClick(event){
    if(event.key === "3"){
      logout()
      localStorage.setItem("authority",null)
    }
  } 
  const menu = (
    <Menu onClick={handleMenuClick}>
      <UserCard user={user}/>
      <Menu.Divider />
      <Menu.Item key="1">
          <Link to="/profile" ><UserOutlined /> Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
          <Link to="/settings"><SettingOutlined /> Settings</Link>
      </Menu.Item>
      <Menu.Divider key="4" />
      <Menu.Item key="3">
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="user-avatar">
      <Dropdown overlay={menu} trigger={["click"]}>
        <Avatar src={user.picture} icon={<UserOutlined />} />
      </Dropdown>
    </div>
  );
}
export default AvatarDropDown;
