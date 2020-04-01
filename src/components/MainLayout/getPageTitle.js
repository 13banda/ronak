
function reducerTitle(breadcrumb=[],path){
    let title = ""
    breadcrumb.forEach(item => {
        if(item.path.match(path)){
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
