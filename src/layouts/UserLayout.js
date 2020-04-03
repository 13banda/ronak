import React from "react";
import DocumentTitle from "components/DocumentTitle";
import useSetting from "hooks/Setting";
import "./UserLayout.less"
import { ReactComponent as logo } from "assets/logo.svg";
import Icon from "@ant-design/icons";

function UserLayout({ children }) {
  const setting = useSetting();
  const LogoIcon = (
    <Icon className="logo" style={{ fontSize: 50 }} component={logo} />
  );
  return (
    <DocumentTitle title={setting.title || ""}>
      <div className="layout-container">
          <div id="logo" className="sider-menu-logo">
              {LogoIcon}
              <h1>{setting.title}</h1>
            </div>
            <p className="discription" style={{marginTop: 5}}>
                Simple Management with ronak
            </p>
          <div className="user-layout-wrapper-children">
             {children}
          </div>
          
      </div>
    </DocumentTitle>
  );
}
export default UserLayout;
