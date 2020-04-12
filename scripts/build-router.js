const { routes, dynamicImport } = require("../config/config");
const defaultSetting = require("../config/defaultSetting")
const routerfilePath = "src/pages/.app/Routers.js";
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

const defaultSetting = ${JSON.stringify(defaultSetting, null, "\t")} 

export const SettingContext = React.createContext(defaultSetting);

const routes = ${routerList}

class RouterWrapper extends Component{
  render() {
    return (
      <SettingContext.Provider value={defaultSetting}>
        <Router>{renderRouter(routes, LoadingComponent)}</Router>
      </SettingContext.Provider>
    );
  }  
}
export default RouterWrapper;`;

 
const fs = require("fs-extra");
// With a callback:
fs.outputFile(routerfilePath, template, err => {});

