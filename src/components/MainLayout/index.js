import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Menus from "components/MainLayout/Menus";

const { Header, Sider, Content } = Layout;

function MainLayout(props) {
  const [collapsed, setCollapsed] = useState(false);
  function toggleCollapsed() {
    setCollapsed((collapsed) => !collapsed);
  }
  return (
    <Layout id="main-layout">
      <Sider width={256} trigger={null} collapsible collapsed={collapsed}>
        {props.logo}
        <Menus {...props} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleCollapsed,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
MainLayout.propTypes = {
  logo: PropTypes.object.isRequired,
};
export default MainLayout;
