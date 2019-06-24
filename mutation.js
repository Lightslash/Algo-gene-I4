function mutation(population){
    console.log("Evolution (mutation)");
    let rate = population.length/100;
    let ct=0;
    while(ct<rate){
        let rd = Math.floor(Math.random()*population.length);
        let parent_1 = population[rd];
        //console.log("parent 1 : ", parent_1);
        let g1 = Math.floor(Math.random()*parent_1.length-1);
        if(g1<=0){
            g1++;
        }else{
            g1--;
        }
        let g2=g1+1;
        let tmp1 = parent_1[g1];
        let tmp2 = parent_1[g2];
        let enfant_1 = [];
        for(let x=0;x<parent_1.length;x++){
            if(x==g1){
                enfant_1[x] = tmp2;
            }else if(x==g2){
                enfant_1[x] = tmp1;
            }else{
                enfant_1.push(parent_1[x]);
            }
        }
        //console.log("enfant 1 : ", enfant_1);
        
        if(issetInArray(enfant_1,memory)){
            continue;
        }
        
        memory.push(enfant_1);
        population[rd] = enfant_1;
        ct++;
    }
    return population;
}