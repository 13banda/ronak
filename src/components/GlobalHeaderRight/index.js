import "./index.less";
import React from "react";
import { useAuth0 } from "auth0";
import AvatarDropDown from "./AvatarDropDown";

function GlobalHeaderRight(props) {
  const { loading, user } = useAuth0();
  console.log(user);
  let content = <AvatarDropDown />;
  if (loading || user) {
    content = <div>Loading...</div>;
  }
  return <div className="ant-global-header-right-content">{content}</div>;
}

export default GlobalHeaderRight;
