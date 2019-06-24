/*
    - rang 
    - proportionnelle
    - tournoi
    - uniforme
*/
function selection_rang(){
    
}
function selection_proportionnelle(){

}
function selection_tournoi(population){
    console.log("Sélection (tournoi)");
    let pop = [];
    let i=0;
    let len = 2;
    while(pop.length<population.length/len){
        let individu_1 = population[i];
        let individu_2 = population[i+1];
        if(individu_2 == undefined){
            pop.push(individu_1);
            i+=2;
            continue;
        }
        if(individu_1.note <= individu_2.note){
            pop.push(individu_1);
        }else{
            pop.push(individu_2);
        }
        i+=2;
    }
    return pop;
}
function selection_uniforme(population){
    //ça fonctionne pas encore
    console.log("Sélection (uniforme)");
    let pop = [];
    let len = population.length-population.length/5;
    while(pop.length<len){
        let rd = Math.floor(Math.random()*population.length-1);
        if(rd==-1){
            rd++;
        }
        let individu = population[rd];
        pop.push(individu);
        population.splice(rd,1);
    }
    return pop;
}