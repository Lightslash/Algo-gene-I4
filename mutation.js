function mutation(population){
    console.log("Evolution (mutation)");
    let rate = population.length/100*0.1;
    for(var ct=0;ct<rate;ct++){
        let rd = Math.floor(Math.random()*population.length);
        let parent_1 = population[rd];
        console.log("parent 1 : ", parent_1);
        let g1 = Math.floor(Math.random()*parent_1.length-1);
        if(g1==-1){
            g1++;
        }
        console.log("random : ", g1);
        let tmp1 = parent_1[g1];
        let tmp2 = parent_1[g1+1];
        console.log(tmp1.city);
        console.log(tmp2.city);
        parent_1.splice(g1, 1, tmp2);
        parent_1.splice(g1+1, 1, tmp1);
        console.log("parent 1 : ", parent_1);
        if(issetInArray(parent_1,population)){
            continue;
        }
        population[rd] = parent_1;
        console.log(population[rd]);
    }
    return population;
}