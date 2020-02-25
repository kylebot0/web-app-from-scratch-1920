import { select } from "./helpers/selectors";
import toggleLoading from "./helpers/loading";

function errorHandling(res) {
    if (res.ok) {
        return res.json();
    } else if(res.status == 404){
        select("h2").textContent = "Fetch URL not found";
        throw new Error("Fetch url not found")
    } else if(res.status == 403){
        return
    }
    else {
        return
    }
}


export {errorHandling}