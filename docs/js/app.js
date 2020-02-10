import toggleLoading from "./modules/loading";
import { select, selectAll } from "./modules/selectors";
import template from "./modules/template";
import { addEvent } from "./modules/eventlisteners";
import { Router } from "./modules/router";
import { matchId } from "./modules/matchId";

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
  let buttons = selectAll("main > section a");
  addRoutes(buttons);
  buttons.forEach((item, i) => {
    addEvent(item, "click", e => {
      // Bug met appenden
      setTimeout(()=>{
        initRouting()
      }, 1)
    });
  });
}

function addRoutes(buttons) {
  // Add routes
  for(let i = 0; i < buttons.length;i++){
    router.get(`${buttons[i].id}`, function (e) {
      let articles = selectAll("article")
      articles.forEach((article) => {
        article.remove()
      })
      toggleLoading()
      data(buttons[i].id)
    });
  }
  

  // execute routes
  initRouting()
}

function initRouting() {
  router.init();
}

async function data(buttonId) {
  let data = await getData(buttonId);
  render(data, buttonId);
}

async function getData(searchTerm) {
  let data = await fetch(`${api.url}${searchTerm}`, requestOptions)
    .then(res => {
      return errorHandling(res);
    })
    .then(result => {
      return result;
    })
    .catch(error => console.log("error", error));
  return data;
}

async function render(data, buttonId) {
  toggleLoading();
  await data.forEach((item, i) => {
    let container = select(".container-info");
    let markup = matchId(item, buttonId);
    container.insertAdjacentHTML("beforeend", markup);
  });
}



function errorHandling(res) {
  if (res.ok) {
    return res.json();
  } else {
    console.log("not ok");
  }
}
