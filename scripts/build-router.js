const { routes, dynamicImport } = require("../config/config");
const routerfilePath = "src/pages/.App/Routers.js";
let r = [];
function renderRoute(item) {
  if(item.component){
    item.component = `lazy(() => import('${item.component}'))`
    r.push(item)
  }
  if(item.routes){
    item.routes = getRouters(item.routes)
  }
  return item;
}

const getRouters = routes => {
  return routes
    .map((item, index) => {
      return renderRoute(item);
    })
};

let routerList = JSON.stringify(getRouters(routes), null, "\t");
r.forEach(item => {
  routerList = routerList.replace('"' + item.component + '"', item.component);
})
let template = `
import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import LoadingComponent from  "${dynamicImport.loadingComponent}" ;
import renderRouter from "./renderRouter";

const routes = ${routerList}

class RouterWrapper extends Component{
    
  render(){
    
      return(
        <Router>
            {renderRouter(routes,LoadingComponent)}
        </Router>
  )
 }  
}
export default RouterWrapper;`;

 
const fs = require("fs-extra");
// With a callback:
fs.outputFile(routerfilePath, template, err => {});


/* let iconList = [];

function getIcon(routes) {
  routes.forEach(item => {
    if (item.icon) {
      iconList.push(item.icon);
    }
    if (item.routes) {
      getIcon(item.routes);
    }
  });
}
let menuRouters = getIcon(routes);
menuRouters = JSON.stringify(routes, null, "\t");
iconList.forEach(item => {
  menuRouters = menuRouters.replace('"' + item + '"', item);
});

let menuConfig = `
import { ${iconList.join(",")} } from "@ant-design/icons"

export default {
    routes: ${menuRouters}
}`;
 */