
export function getBreadcrumb(routes,path){ 
   const regx = new RegExp("^" + path.replace(/:[^\s/]+/g, '([\\w-]+)') + "$")
        let breadcrumb = []
        routes.forEach(item => {
            if(item.path.match(regx)){
                breadcrumb.push({ path: item.path, breadcrumbName: item.name})
            }
            if(item.children){
                let c = getBreadcrumb(item.children,path) 
                if(c){
                    breadcrumb.push({ path: item.path, breadcrumbName: item.name})
                    breadcrumb.push(...c);
                }
            }
        })
        return breadcrumb;    
}