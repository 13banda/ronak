import React from "react";
import MainLayout from "components/MainLayout";

function BasicLayout(props) {
  return (
    <MainLayout logo={<div className="logo" />}>{props.children}</MainLayout>
  );
}

export default BasicLayout;
