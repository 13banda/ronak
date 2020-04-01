
export function getBreadcrumb(routes,path){ 
        let breadcrumb = []
        routes.forEach(item => {
            if(item.path.match(path)){
                breadcrumb.push({ path: item.path, breadcrumbName: item.name})
            }
            if(item.children){
                let c = getBreadcrumb(item.children,path) 
                breadcrumb.push(...c);
            }
        })
        return breadcrumb;    
}