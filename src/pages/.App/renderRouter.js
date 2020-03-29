import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

function renderRouter(routes, LoadingComponent) {
    
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={route.path || index}
          path={route.path || null}
          exact={route.exact}
          render={(props) => {
              if(route.component){
                  return (
                    <Suspense fallback={<LoadingComponent />}>
                      <route.component {...props} route={route}>
                        {route.routes && renderRouter(route.routes, LoadingComponent)}
                      </route.component>
                    </Suspense>
                  )
              } else if(route.routes){
                 return renderRouter(route.routes, LoadingComponent);
              } else if(route.redirect) {
                return <Redirect to={route.redirect} />
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
