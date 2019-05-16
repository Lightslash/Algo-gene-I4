//créer la population :
var population = createPopulation(cities, 1000);
var index = 0;
while(population.length>1){
console.log(index);

console.log("Evaluation :");
population = evaluation(population);

console.log("Sélection (rang, tournoi, proportionnelle, uniforme) :");
population = selection_tournoi(population);

console.log("Evolution (croisement, mutation)");
population = croisement(population);

index++;
}
console.log("pop")
console.log(population);

//Afficher la réponse
let toRet = calculate_answer(population[0]);
var i = 0;
