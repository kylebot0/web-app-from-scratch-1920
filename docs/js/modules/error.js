function errorHandling(res) {
    if (res.ok) {
        return res.json();
    } else {
        console.log("not ok");
    }
}

export {errorHandling}