module.exports = {
  dynamicImport: {
    loadingComponent: "components/PageLoading",
    webpackChunkName: true,
    level: 3
  },
  routes: [
    {
      path: "/",
      component: "layouts/BlankLayout",
      routes: [
        {
          path: "/user",
          component: "layouts/UserLayout",
          routes: [
            {
              path: "/user/login",
              component: "pages/User/Login"
            },
            {
              path: "/user/registered",
              component: "pages/User/SignUp"
            },
            {
              path: "/user",
              redirect: "/user/login"
            },
            {
              component: "pages/404"
            }

          ]
        },
        {
          path: "/",
          component: "layouts/BasicLayout",
          authority: ["admin"],
          routes: [
            {
              name: "Dashboard",
              icon: "DashboardOutlined",
              path: "/dashboard",
              component: "pages/dashboard",
              authority: ["admin"],
            },
            {
              name: "Student",
              path: "/student",
              icon: "UserOutlined",
              authority: ["admin"],
              routes: [
                {
                  name: "Student List",
                  icon: "UnorderedListOutlined",
                  path: "/student/list",
                  component: "pages/Student/StudentList",
                  exact: true,
                  authority: ["admin"],
                },
                {
                  name: "Add Student",
                  icon: "UserAddOutlined",
                  path: "/student/add",
                  component: "pages/Student/AddStudent",
                  exact: true,
                  authority: ["admin"],
                },
                {
                  path: "/student",
                  redirect: "/student/list"
                }
              ]
            },
            {
              name: "Settings",
              icon: "SettingOutlined",
              path: "/settings",
              component: "pages/Settings",
              exact: true
            },
            {
              path: "/profile",
              authority: ["admin"],
              component: "pages/Account/Profile",
              exact: true
            },
            {
              path: "/",
              redirect: "/dashboard"
            },
            {
              component: "pages/404"
            }
          ]
        }
      ]
    }
  ]
};