
const { pathToRegexp } = require("path-to-regexp");
 
function reducerTitle(breadcrumb=[],path){
    let title = ""
    breadcrumb.forEach(item => {
        if(pathToRegexp(`${item.path}.*`).test(path)){
            // exact match
          title = item.breadcrumbName
        }
    })
    return title;
}

export default function getPageTitle({ breadcrumb=[], setting = { }, path }) {
    let title = "";
     title = reducerTitle(breadcrumb, path)

    if(title !== "" && setting.title){
        title = title+" | "+ setting.title
    }
    else if(setting.title){
        title = setting.title
    }

    return title || "";
}
