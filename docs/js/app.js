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
  const hashDetection = new hashHandler();
  app();
}

function hashHandler() {
  this.oldHash = window.location.hash;
  this.Check;

  let that = this;
  let detect = function () {
    if (that.oldHash != window.location.hash) {
      let articles = selectAll("article");
            articles.forEach(article => {
              article.remove();
            });
      router.init();
      that.oldHash = window.location.hash;
    }
  };
  this.Check = setInterval(function () { detect() }, 100);
}

async function app() {
  let buttons = selectAll(".buttons a");
  let data = await getData(buttons, api, requestOptions);
  addRoutesToRouter(data, buttons)
  toggleLoading()
}

function addRoutesToRouter(data, buttons){
  data.forEach((category, i)=>{
    console.log(category)
    category.forEach((item)=>{
      let itemKey = item[Object.keys(item)[0]];
      let categoryId = matchCategoryToId(category, i)
      router.get(`${itemKey}`, categoryId, async () => {
        toggleLoading()
        let data = await getDetailData(categoryId, api, itemKey, categoryId);
        renderDetail(data, categoryId);
        toggleLoading()
      });
    })
  })
  buttons.forEach((item, i)=> {
    router.get(`${item.id}`, `${item.id}`,function (e) {
      render(data, item.id, i);
    });
  })
  console.log(router)
  router.init()
}
function matchCategoryToId(category, i){
  if(i == 0){
    return "launches"
  } else if(i == 1){
    return "ships"
  } else if (i == 2) {
    return "capsules"
  } else if (i == 3) {
    return "missions"
  } else if (i == 4) {
    return "rockets";
  }
}
function render(data, buttonId, index) {
  console.log(data)
  data[index].forEach((item, i) => {
    let container = select(".container-info");
    let markup = matchId(item, buttonId);
    container.insertAdjacentHTML("beforeend", markup);
  });
}


function renderDetail(data, buttonId) {
  console.log(buttonId)
  let container = select(".container-info");
  let markup = matchDetailId(data, buttonId);
  container.insertAdjacentHTML("beforeend", markup);
}
