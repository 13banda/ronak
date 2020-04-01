import React from "react";
import MainLayout from "components/MainLayout";
import { ReactComponent as Logo } from "assets/logo.svg";

const menuDataRenderer = menuList => {
  return menuList;
};

function BasicLayout(props) {
  return (
    <MainLayout logo={Logo} {...props} menuDataRenderer={menuDataRenderer}>
      {props.children}
    </MainLayout>
  );
}

export default BasicLayout;
