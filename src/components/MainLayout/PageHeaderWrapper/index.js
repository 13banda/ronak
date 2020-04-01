import React, { useContext } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { PageHeader } from "antd";
import "./index.less";
import getPageTitle from "../getPageTitle";
import RouteContext from "../RouteContext";

const breadcrumbItemRenderer = (route, params, routes, paths) =>{
  const last = route.path === routes[routes.length - 1].path
  return last ?
  <span>{route.breadcrumbName}</span>
  : (
  <Link to={route.path}>{route.breadcrumbName}</Link>
  )
}
export default function PageHeaderWrapper(props) {
  const { content } = props;
  const routerMatch = useRouteMatch();
  const { breadcrumb } = useContext(RouteContext);
  console.log(breadcrumb);
  const title = getPageTitle({
    breadcrumb: breadcrumb,
    path: routerMatch.path
  });
  return (
    <div>
      <div className="page-header-wrapper">
        <PageHeader title={title} breadcrumb={{ routes: breadcrumb, itemRender: breadcrumbItemRenderer  }}>
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
