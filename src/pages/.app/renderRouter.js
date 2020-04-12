import React, { Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Authorized from "pages/Authorized";

function renderRouter(routes, LoadingComponent) {
  console.log("rerender");
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={route.path || index}
          path={route.path || null}
          exact={route.exact}
          render={(props) => {
            if (route.component) {
              return (
                <Suspense fallback={<LoadingComponent />}>
                  <Authorized route={route} {...props}>
                    <route.component {...props} route={route}>
                      {route.routes &&
                        renderRouter(route.routes, LoadingComponent)}
                    </route.component>
                  </Authorized>
                </Suspense>
              );
            } else if (route.routes) {
              return renderRouter(route.routes, LoadingComponent);
            } else if (route.redirect) {
              return <Redirect to={route.redirect} />;
            } else {
              return null;
            }
          }}
        />
      ))}
    </Switch>
  );
}
export default renderRouter;
