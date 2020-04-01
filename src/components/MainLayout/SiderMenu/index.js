export function parseMenu(routes) {
    return routes
      .filter(e => e.name)
      .map(item => {
        return {
          icon: item.icon,
          name: item.name,
          path: item.path,
          children: item.routes ? parseMenu(item.routes) : null
        };
      });
  }