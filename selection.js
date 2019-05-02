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
    let pop = [];
    let i=0;
    while(pop.length<population.length/2){
        let individu_1 = population[i];
        let individu_2 = population[i+1];
        if(individu_2 == undefined){
            pop.push(individu_1);
            return pop;
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
function selection_uniforme(){

}