//créer la population : 
var population = createPopulation(cities, 1000);
var index = 0;
while(population.length>1){
console.log(index);

console.log("Evalution :");
population = evaluation(population);

console.log("Sélection (rang, tournoi, proportionnelle, uniforme) :");
population = selection_tournoi(population);

console.log("Evolution (croisement, mutation)");
population = croisement(population);

index++;
}
console.log(population);
//Afficher la réponse
let toRet = "En chantier";
display_answer(toRet);