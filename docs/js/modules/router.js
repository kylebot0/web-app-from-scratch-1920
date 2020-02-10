class Router {
  constructor() {
    this.routes = [];
    this.options = [];
  }

  get(uri, cb) {
    if (!uri || !cb) {
        throw new Error("uri or callback must be given")
    } else if (typeof uri !== "string"){
      throw new TypeError("typeof uri must be a string")
    } else if (typeof cb !== "function"){
      throw new TypeError("typeof callback must be a function")
    };
    this.routes.forEach(route => {
      if (route.uri === uri)
        throw new Error(`the uri ${route.uri} already exists`);
    });
    const route = {
      uri,
      cb
    };
    console.log(route);
    this.routes.push(route);
  }

  init() {
    this.routes.some(route => {
      let path = window.location.href;
      let cleanPath = path.split("#")[0];
      let routePath = cleanPath + "#" + route.uri;
     console.log(path)
      if (path == routePath) {
        console.log("test");
        let req = { path };
        return route.cb.call(this, req);
      }
    });
  }
}

export { Router };
