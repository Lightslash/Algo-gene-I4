function createPopulation(cities,branches){
    //let population = [];
    for(let i=0;i<branches;i++){
        let ar = shuffle(cities);
        if(population.length==0){
            population.push(ar);
            memory.push(ar);
        }else{
            while(population.length==i){
                if(!issetInArray(ar, memory)){
                    population.push(ar);
                    memory.push(ar);
                }
            }
        }
    }
    return population;
}
function best(population){
    let best = { note: 10000 };
    for(let i=0;i<population.length;i++){
        let individu = population[i];
        if(individu.note<best.note){
            best = individu;
        }
    }
    return best;
}