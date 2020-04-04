import "./index.less";
import React from "react";
import { useAuth0 } from "auth0";
import AvatarDropDown from "./AvatarDropDown";
import ClipLoader from "react-spinners/ClipLoader";


function GlobalHeaderRight(props) {
  const { loading, user, logout } = useAuth0();
  console.log(user)
  let content = <AvatarDropDown user={user} logout={logout}/>;

  if (loading || !user) {
    content = (
      <ClipLoader
        size={25}
        color={"#123abc"}
        loading={true}
      />
    );
  }
  return <div className="ant-global-header-right-content">{content}</div>;
}

export default GlobalHeaderRight;
