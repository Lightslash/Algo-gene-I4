function createPopulation(cities,branches){
    let population =[];
    for(let i=0;i<branches;i++){
        let ar = shuffle(cities);
        if(population.length==0){
            population.push(ar);
        }else{
            while(population.length==i){
                let check = true;
                for(let j=0;j<population.length;j++){
                    if(sameArray(population[j], ar)){
                        check =false;
                        break;
                    }
                }
                if(check==true){
                    population.push(ar);
                }
            }
        }
    }
    return population;
}