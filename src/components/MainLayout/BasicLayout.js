import React, { useState } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";
import Menus from "components/MainLayout/Menus";
import Icon from "@ant-design/icons";
import "./index.less";
import useSetting from "hooks/Setting";
import GlobalHeader from "./GlobalHeader/index";
import { parseMenu } from "./SiderMenu/index";
import RouteContext from "./RouteContext";
import useMediauery from "use-media-antd-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getBreadcrumb } from "./utils/util";
import getPageTitle from "./getPageTitle";

const { Header, Sider, Content } = Layout;

function MainLayout(props) {
  const {
    logo,
    route = {
      routes: []
    },
    breadcrumbRender,
    menuDataRenderer,
    rightContentRender,
    children,
    location
  } = props;

  const setting = useSetting();

  const colSize = useMediauery();
  const isMobile = colSize === "sm" || colSize === "xs";

  const [collapsed, setCollapsed] = useState(false);
  function toggleCollapsed(collapsed) {
    setCollapsed(collapsed);
  }

  let menuList = parseMenu(route.routes);
  menuList = menuDataRenderer(menuList);
  
  const getBreadcrumbMenuList = () => {
   let breadcrumbList =  getBreadcrumb(menuList,location.pathname);
    return breadcrumbRender(breadcrumbList);
  }
  const breadcrumbMenuList = getBreadcrumbMenuList();
  console.log(breadcrumbMenuList)
  const title = getPageTitle({
    breadcrumb: breadcrumbMenuList,
    setting,
    path: location.pathname
  });
  const LogoIcon = (
    <Icon className="logo" style={{ fontSize: 32 }} component={logo} />
  );
  const routeContextValue = {
    isMobile: isMobile,
    breadcrumb: breadcrumbMenuList,
    setting,
    title
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      <RouteContext.Provider value={routeContextValue}>
        <Layout id="main-layout">
          <Sider
            breakpoint="md"
            collapsedWidth={isMobile ? 0 : 80}
            width={256}
            trigger={null}
            collapsible
            onBreakpoint={broken => toggleCollapsed(broken)}
            collapsed={collapsed}
          >
            <div id="logo" className="sider-menu-logo">
              {LogoIcon}
              <h1>{setting.title}</h1>
            </div>
            <Menus menus={menuList} />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <GlobalHeader
                collapsed={collapsed}
                onCollapsed={toggleCollapsed}
                logo={LogoIcon}
                rightContentRender={rightContentRender}
                {...routeContextValue}
              />
            </Header>
            <Content className="page-header-wrapper-children">
              {children}
            </Content>
          </Layout>
        </Layout>
      </RouteContext.Provider>
    </>
  );
}
MainLayout.propTypes = {
  logo: PropTypes.object.isRequired,
  menuDataRenderer: PropTypes.func
};
export default MainLayout;
