
import {errorHandling} from "./error"

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function getData(searchTerm, api, requestOptions) {
  let searchterms = ["launches", "ships", "capsules", "missions", "rockets"]
  let dataArray = []
    await asyncForEach(searchterms, async (term,i)=>{
        let data = await fetch(`${api.url}${term}`, requestOptions)
          .then(res => {
            return errorHandling(res);
          })
          .then(result => {
            return result;
          })
          .catch(error => console.log("error", error));
        dataArray.push(data)
    })
    return dataArray;
}

async function getDetailData(searchTerm, api, id, categoryId) {
  let dataArray = [];
  let data = await fetch(`${api.url}${categoryId}/${id}`)
    .then(res => {
      return errorHandling(res);
    })
    .then(result => {
      return result;
    })
    .catch(error => console.log("error", error));
    if(data == undefined){
      return
    } else {
      dataArray.push(data);
    }
  
  return dataArray[0];
}

export {getData, getDetailData}