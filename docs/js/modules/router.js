import { select } from "./helpers/selectors";
import { getData, getDetailData } from "./data";
import { render, renderDetail } from "./render";
import toggleLoading from "./helpers/loading";

const api = {
  url: `https://api.spacexdata.com/v3/`
};

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

function addRoutesToRouter(router, data, buttons) {
  data.forEach((category, i) => {
    category.forEach(item => {
      let itemKey = determineItemKey(item, i);
      let categoryId = matchCategoryToId(category, i);
      router.get(`${itemKey}`, categoryId, async () => {
        toggleLoading();
        const data = await getDetailData(categoryId, api, itemKey, categoryId);
        renderDetail(data, categoryId);
        toggleLoading();
      });
    });
  });
  buttons.forEach((item, i) => {
    router.get(`${item.id}`, `${item.id}`, function(e) {
      render(data, item.id, i);
    });
  });
  router.init();
}


class Router {
  constructor() {
    this.routes = [];
    this.options = [];
  }

  get(uri, category, cb) {
    if (!uri || !cb) {
        throw new Error("Must give uri or cb")
    } else if (typeof uri !== "string"){
      throw new TypeError("Must be a string")
    } else if (typeof cb !== "function"){
      throw new TypeError("Cb must be a function")
    }else {
    this.routes.forEach((route, i) => {
      if (route.uri === uri) {
        // Temporary
        this.routes.splice(i, 1)
        // throw new Error(`the uri ${route.uri} already exists`);
      } else {
        
      }
    });
    const route = {
      uri,
      category,
      cb
    };
    this.routes.push(route);
  }
  }

  init() {
    console.log(window.location.hash)
    let indexPage = 167;
    let doesExist = this.routes.filter((route, i)=>{
      let hashRoute = "#" + route.uri
      if(hashRoute == window.location.hash){
        return true
      } else if(window.location.hash.length == 0){
        return true
      }
       else {
        return false
      }
    })
    if(doesExist.length == 0){
      select("h2").textContent = "Page not found"
    }
    
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

function determineItemKey(item, i){
  let itemKey = '';
  switch (i) {
    case 0:
      itemKey = item[Object.keys(item)[0]];
      break;
    case 1:
      itemKey = item[Object.keys(item)[0]];
      break;
    case 2:
      itemKey = item[Object.keys(item)[0]];
      break;
    case 3:
      itemKey = item[Object.keys(item)[1]];
      break;
    case 4:
      itemKey = item.rocket_id;
      break;
  }
  return itemKey;
}

function matchCategoryToId(category, i) {
  let title = '';
  switch (i) {
    case 0: 
    title = "launches"
      break;
    case 1:
      title = "ships"
      break;
    case 2:
      title = "capsules"
      break;
    case 3:
      title = "missions"
      break;
    case 4:
      title = "rockets"
      break;
  }
  return title
}
export {Router, addRoutesToRouter}