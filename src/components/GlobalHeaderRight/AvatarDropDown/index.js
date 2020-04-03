import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import "./index.less";
function UserCard(props){
    return(<div style={{ padding: 10, display: "flex"}}>
         <Avatar icon={<UserOutlined />} />
         <div style={{ marginLeft: 10,}}>
             <p style={{ marginTop: 3,marginBottom:0}}>Sandeep Singh</p>
         </div>
    </div>)
}
function AvatarDropDown(props) {
    const menu = (
            <Menu>
                <UserCard />
                <Menu.Divider />
                <Menu.Item key="1">
                <UserOutlined /> Account  
                </Menu.Item>
                <Menu.Item key="2">
                   <SettingOutlined /> Settings
                </Menu.Item>
                <Menu.Divider key="4"/>
                <Menu.Item key="3">
                   <LogoutOutlined /> Logout
                </Menu.Item>
            </Menu>
    )
  return (
    <div className="user-avatar">
      <Dropdown overlay={menu}  trigger={['click']} >
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </div>
  );
}
export default AvatarDropDown;
