function errorHandling(res) {
    if (res.ok) {
        return res.json();
    } else if(res.status == 404){
        throw new Error("Fetch url not found")
    }
    else {
        return
    }
}

export {errorHandling}