const createStorage = function() {

    return{
    getItem: function(){
        if(window.localStorage.length == 0){
            return window.localStorage.length
        } else if(window.localStorage.items.length >= 1){
            let parsed = JSON.parse(window.localStorage.getItem("items"));
            return parsed;
        }
    },
    setItem: function(data){
        console.log(data)
        return window.localStorage.setItem("items", JSON.stringify(data))
    },
    removeItem: function(){

    },
    clear: function(){
        
    }
}
}

export { createStorage };