function createPopulation(cities,branches){
    let population =[];
    for(let i=0;i<branches;i++){
        let ar = shuffle(cities);
        if(population.length==0){
            population.push(ar);
        }else{
            while(population.length==i){
                if(!issetInArray(ar, population)){
                    population.push(ar);
                }
            }
        }
    }
    return population;
}