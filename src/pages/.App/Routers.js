import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingComponent from "components/PageLoading";
import renderRouter from "./renderRouter";

const routes = [
  {
    path: "/",
    component: lazy(() => import("layouts/BlankLayout")),
    routes: [
      {
        path: "/user",
        component: lazy(() => import("layouts/UserLayout")),
        routes: [
          {
            path: "/user/login",
            component: lazy(() => import("pages/User/Login")),
          },
          {
            path: "/user/registered",
            component: lazy(() => import("pages/User/SignUp")),
          },
          {
            component: lazy(() => import("pages/404")),
          },
        ],
      },
      {
        path: "/",
        component: lazy(() => import("layouts/BasicLayout")),
        routes: [
          {
            name: "Dashboard",
            icon: "DashboardOutlined",
            path: "/dashboard",
            component: lazy(() => import("pages/dashboard")),
          },
          {
            name: "Student",
            path: "/student",
            icon: "UserOutlined",
            routes: [
              {
                name: "Student List",
                icon: "UnorderedListOutlined",
                path: "/student/list",
                component: lazy(() => import("pages/Student/StudentList")),
                exact: true,
              },
              {
                name: "Add Student",
                icon: "UserAddOutlined",
                path: "/student/add",
                component: lazy(() => import("pages/Student/AddStudent")),
                exact: true,
              },
              {
                path: "/student",
                redirect: "/student/list",
              },
            ],
          },
          {
            name: "Settings",
            icon: "SettingOutlined",
            path: "/settings",
            component: lazy(() => import("pages/Settings")),
            exact: true,
          },
          {
            path: "/",
            redirect: "/dashboard",
          },
          {
            component: lazy(() => import("pages/404")),
          },
        ],
      },
    ],
  },
];

class RouterWrapper extends Component {
  render() {
    return <Router>{renderRouter(routes, LoadingComponent)}</Router>;
  }
}
export default RouterWrapper;
