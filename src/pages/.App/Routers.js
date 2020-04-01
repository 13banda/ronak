import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingComponent from "components/PageLoading";
import renderRouter from "./renderRouter";

const defaultSetting = {
  navTheme: "dark",
  primaryColor: "#13C2C2",
  layout: "sidemenu",
  contentWidth: "Fluid",
  fixedHeader: true,
  autoHideHeader: false,
  fixSiderbar: true,
  menu: {
    locale: true,
  },
  title: "Ronak",
  pwa: false,
  iconfontUrl: "",
  collapse: true,
  language: "en-US",
};

export const SettingContext = React.createContext(defaultSetting);

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
            path: "/user",
            redirect: "/user/login",
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
    return (
      <SettingContext.Provider value={defaultSetting}>
        <Router>{renderRouter(routes, LoadingComponent)}</Router>
      </SettingContext.Provider>
    );
  }
}
export default RouterWrapper;
