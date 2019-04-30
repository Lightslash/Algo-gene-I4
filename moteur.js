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
function createPopulation(cities,epochs){
    let population =[];
    for(let i=0;i<epochs;i++){
        population.push(shuffle(cities));
    }
    return population;
}