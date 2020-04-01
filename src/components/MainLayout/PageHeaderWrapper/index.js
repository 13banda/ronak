import React, { useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { PageHeader } from "antd";
import "./index.less";
import getPageTitle from "../getPageTitle";
import RouteContext from "../RouteContext";

export default function PageHeaderWrapper(props) {
  const { content } = props;
  const routerMatch = useRouteMatch();
  const { breadcrumb } = useContext(RouteContext);
  console.log(breadcrumb);
  const title = getPageTitle({
    breadcrumb: breadcrumb,
    path: routerMatch.path
  });
  const routes = [
    {
      path: "/",
      breadcrumbName: "Home"
    },
    ...breadcrumb
  ];
  console.log(breadcrumb)
  return (
    <div>
      <div className="page-header-wrapper">
        <PageHeader title={title} breadcrumb={{ routes }}>
          {content}
        </PageHeader>
      </div>
      <div
        className="page-header-children-wrapper"
        style={{
          margin: "12px 16px",
          padding: 24,
          minHeight: 280
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
