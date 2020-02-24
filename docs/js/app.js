import toggleLoading from "./modules/helpers/loading";
import { getData, getDetailData } from "./modules/data";
import { select, selectAll } from "./modules/helpers/selectors";
import { Router } from "./modules/router";
import { template, templateDetail } from "./modules/matchId";
import hashHandler from "./modules/hashHandler";
import { createStorage } from "./modules/localStorage";

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
  toggleLoading();
  const hashDetection = new hashHandler(router);
  app();
}

async function app() {
  const buttons = selectAll(".buttons a");
  const data = await checkLocalStorage(buttons);
  addRoutesToRouter(data, buttons);
  toggleLoading();
}

async function checkLocalStorage(buttons) {
  const storage = createStorage();
  let items = storage.getItem();
  if (items == 0) {
    console.log("1");
    let data = await getData(buttons, api, requestOptions);
    storage.setItem(data);
    return data;
  } else if (items.length > 1) {
    return storage.getItem();
  }
}

function addRoutesToRouter(data, buttons) {
  data.forEach((category, i) => {
    console.log(category);
    category.forEach(item => {
      let itemKey = item[Object.keys(item)[0]];
      let categoryId = matchCategoryToId(category, i);
      router.get(`${itemKey}`, categoryId, async () => {
        toggleLoading();
        let data = await getDetailData(categoryId, api, itemKey, categoryId);
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
  console.log(router);
  router.init();
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
function render(data, buttonId, index) {
  console.log(data[index]);
  data[index].forEach((item, i) => { 
    let container = select(".container-info");
    let markup = template(item, buttonId);
    container.insertAdjacentHTML("beforeend", markup);
  });
}

function renderDetail(data, buttonId) {
  console.log(buttonId);
  let container = select(".container-info");
  let markup = templateDetail(data, buttonId);
  container.insertAdjacentHTML("beforeend", markup);
}
