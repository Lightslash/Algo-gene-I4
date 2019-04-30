function evaluation(population){
    let pop = [];
    for(let i=0;i<population.length;i++){
        let individu = population[i];
        individu.note = eval(individu);
        pop.push(individu);
    }
    return pop;
}
function eval(individu){
    let note = 0;
    for(let i=0;i<individu.length-1;i++){
        let dis = calculDistance(individu[i].lan,individu[i].lng,individu[i+1].lan,individu[i+1].lng);
        note+=dis;
    }
    return note/individu.length;
}