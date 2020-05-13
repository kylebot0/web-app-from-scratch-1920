import toggleLoading from "./modules/helpers/loading";
import { select, selectAll } from "./modules/helpers/selectors";
import { Router, addRoutesToRouter } from "./modules/router";
import { checkLocalStorage } from "./modules/localStorage";
import hashHandler from "./modules/hashHandler";
import { errorHandling } from "./modules/error";


init();

async function init() {
const router = new Router();
const hash = new hashHandler(router);
  const buttons = selectAll(".buttons a")
  const promise = checkLocalStorage(buttons)
  toggleLoading();
  
  promise.then((data) =>{
    addRoutesToRouter(router, data, buttons);
  }).then(()=>{
    toggleLoading();
  })
}



