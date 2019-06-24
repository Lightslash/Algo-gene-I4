function croisement(population){
    console.log("Evolution (croisement)");
    let pop = [];
    let i=0;
    while(pop.length<population.length){
        let parent_1 = population[i];
        let parent_2 = population[i+1];
        if(parent_2 == undefined){
            pop.push(parent_1);
            return pop;
        }
        
        let cross = one_point_crossover(parent_1, parent_2);
        var enfant_1 = cross[0];
        var enfant_2 = cross[1];
        if(!issetInArray(enfant_1, memory) && !issetInArray(enfant_2, memory)){
            pop.push(enfant_1);
            pop.push(enfant_2);
            memory.push(enfant_1);
            memory.push(enfant_2);
        }
        pop.push(parent_1);
        pop.push(parent_2);
        i+=2;
    }
    return pop;
}
function one_point_crossover(parent1, parent2){
    let cross = [];
    let enfant1 = [];
    let enfant2 = [];
    let ind = Math.round(parent1.length/2);
    for(let i=0;i<ind;i++){
        enfant1.push(parent1[i]);
    }
    for(let i=0;i<ind;i++){
        enfant2.push(parent2[i]);
    }
    for(let j=0;j<parent2.length;j++){
        for(let i=ind;i<parent1.length;i++){
            if(parent1[i].city==parent2[j].city){
                enfant1.push(parent2[j]);
            }
        }
    }
    for(let j=0;j<parent1.length;j++){
        for(let i=ind;i<parent2.length;i++){
            if(parent2[i].city==parent1[j].city){
                enfant2.push(parent1[j]);
            }
        }
    }
    cross.push(enfant1);
    cross.push(enfant2);
    return cross;
}