import React from "react";
import { pathToRegexp } from "path-to-regexp"
import { Redirect } from "react-router-dom";
import Authorized from 'utils/Authorized';

const getRouteAuthority = (path, routeData) => {
    let authorities;
    routeData.forEach( route => {
        // match prefix
        if(route.path && pathToRegexp(`${ route.path}`).test(path)) {
            // exact match
            if(route.path === path){
                authorities = route.authority || authorities;
            }
            // get children authority recursively
            if(route.routes) {
                authorities = getRouteAuthority(path,route.routes) || authorities;
            }
        }
    });
    return authorities;
}
const AuthComponent = ({
    children,
    route= {
        routes: []
    },
    location = {
        pathname: ''
    },
}) => {
    const { routes = [] } = route;
    const isLogin = window.localStorage.getItem("HASURA_TOKEN"); 

    return (
        <Authorized
         authority={getRouteAuthority(location.pathname, routes) || ''}
         notMatch={<Redirect to={isLogin ? "/dashboard" : "/user/login"} />}
         >
             {children}
         </Authorized>
    )
}

export default AuthComponent;