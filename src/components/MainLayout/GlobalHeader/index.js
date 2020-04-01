import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./index.less";
import classNames from 'classnames'

function GlobalHeader(props) {
  const {
    isMobile,
    logo,
    rightContentRender,
    menuHeaderRender,
    className: propClassName,
    style,
    collapsed,
    onCollapsed
  } = props;

  function triggerResizeEvent() {
    const event = document.createEvent("HTMLEvents");
    event.initEvent("resize", true, false);
    window.dispatchEvent(event);
  }

  function toggle() {
    onCollapsed(!collapsed);
    triggerResizeEvent();
  }

  function renderLogo() {
    return (
      <span className="ant-pro-global-header-logo" key="logo">
        {logo}
      </span>
    );
  }

  const CollapsedMenuIcon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
  const className = classNames(propClassName, "ant-pro-global-header")
  return (
    <div className={className} style={style}>
      {isMobile && renderLogo()}
      <div className="ant-pro-global-header-trigger" onClick={toggle}>
        <CollapsedMenuIcon  />
      </div>
      <div style={{ flex: 1 }}></div>
      {rightContentRender && rightContentRender(props)}
    </div>
  );
}
export default GlobalHeader;
