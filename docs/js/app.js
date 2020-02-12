import toggleLoading from "./modules/helpers/loading";
import { getData, getDetailData } from "./modules/data";
import { errorHandling } from "./modules/error";
import { select, selectAll } from "./modules/helpers/selectors";
import { addEvent } from "./modules/helpers/eventlisteners";
import { Router } from "./modules/router";
import { matchId, matchDetailId } from "./modules/matchId";

const requestOptions = {
  method: "GET",
  redirect: "follow"
};
const api = {
  url: `https://api.spacexdata.com/v3/`
};
const router = new Router();

onLoad();

function onLoad() {
  toggleLoading()
  // buttons.forEach((item, i) => {
  //   addEvent(item, "click", e => {
  //     // Bug met appenden
  //     setTimeout(() => {
  //       // initRouting();
  //       router.init()
  //     }, 1);
  //   });
  // });
  app();
}


function addButtonRoutes(buttons) {
  // Add routes
 buttons.forEach((item,i)=>{
    router.get(`${buttons[i].id}`, function(e) {
      let articles = selectAll("article");
      articles.forEach(article => {
        article.remove();
      });
      toggleLoading();
      app(buttons[i].id);
    });
  });
  // execute routes
}

async function app() {
  let buttons = selectAll(".buttons a");
  let data = await getData(buttons, api, requestOptions);
  addRoutesToRouter(data, buttons)
  linkEventButtons(data)
  toggleLoading()
}

function addRoutesToRouter(data, buttons){
  data.forEach((category,i)=>{
    category.forEach((item,i)=>{
      router.get(`${item[Object.keys(item)[0]]}`, async () => {
        let data = await getDetailData(id, api, item[Object.keys(item)[0]]);
        renderDetail(data, item.id);
      });
    })
  })
  buttons.forEach((item, i)=> {
    router.get(`${item.id}`, function (e) {
      render(data, item.id);
    });
  })
  console.log(router.routes)
  router.init()
}

function render(data, buttonId) {
  console.log(data)
  toggleLoading();
  data.forEach((item, i) => {
    let container = select(".container-info");
    let markup = matchId(item, buttonId);
    container.insertAdjacentHTML("beforeend", markup);
  });
}


function linkEventButtons() {
  let buttons = selectAll(".container-info a")
  buttons.forEach((item, i)=>{
    addEvent(item, "click", e => {
      let articles = selectAll("article");
      articles.forEach(article => {
        article.remove();
      });
      setTimeout(() => {
        router.init();
      }, 1);
      
    })
  })
}


function renderDetail(data, buttonId) {
  console.log(data)
  let container = select(".container-info");
  let markup = matchDetailId(data, buttonId);
  container.insertAdjacentHTML("beforeend", markup);
}
