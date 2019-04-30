function shuffle(array) {
    let ar = [];
    while(ar.length!=array.length){
        var item = array[Math.floor(Math.random()*array.length)];
        var indexOf = ar.map(function(e) { return e.city; }).indexOf(item.city);
        if(indexOf==-1){
            ar.push(item);
        }
    }
    return ar;
}
function sameArray(ar1, ar2){
    //return true if array are the same
    for(let i=0;i<ar1.length;i++){
        if(ar1[i].city!=ar2[i].city){
            return false;
        }
    }    
    return true;
}