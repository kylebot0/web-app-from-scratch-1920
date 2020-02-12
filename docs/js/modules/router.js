export class Router {
  constructor() {
    this.routes = [];
    this.options = [];
  }

  get(uri, cb) {
    if (!uri || !cb) {
        throw new Error("Must give uri or cb")
    } else if (typeof uri !== "string"){
      throw new TypeError("Must be a string")
    } else if (typeof cb !== "function"){
      throw new TypeError("Cb must be a function")
    }else {
    this.routes.forEach((route, i) => {
      if (route.uri === uri) {
        this.routes.splice(i, 1)
        // throw new Error(`the uri ${route.uri} already exists`);
      } else {
        
      }
    });
    const route = {
      uri,
      cb
    };
    this.routes.push(route);
  }
  }

  init() {
    this.routes.some(route => {
      let path = window.location.href;
      let cleanPath = path.split("#")[0];
      let routePath = cleanPath + "#" + route.uri;
      if (path == routePath) {
        let req = { path };
        return route.cb.call(this, req);
      }
    });
  }
}

