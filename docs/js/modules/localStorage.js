import { getData } from "./data";

const api = {
    url: `https://api.spacexdata.com/v3/`
};

const requestOptions = {
    method: "GET",
    redirect: "follow"
};

async function checkLocalStorage(buttons) {
    const storage = createStorage();
    const items = storage.getItem();
    if (items == 0) {
        console.log("1");
        const data = await getData(buttons, api, requestOptions);
        storage.setItem(data);
        return data;
    } else if (items.length > 1) {
        return storage.getItem();
    }
}

const createStorage = function() {

    return {
        getItem: function() {
            if (window.localStorage.length == 0) {
                return window.localStorage.length
            } else if (window.localStorage.items.length >= 1) {
                let parsed = JSON.parse(window.localStorage.getItem("items"));
                return parsed;
            }
        },
        setItem: function(data) {
            console.log(data)
            return window.localStorage.setItem("items", JSON.stringify(data))
        },
        removeItem: function() {

        },
        clear: function() {

        }
    }
}

export { checkLocalStorage };