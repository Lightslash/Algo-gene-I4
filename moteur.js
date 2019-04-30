//créer la population : 
var population = createPopulation(cities, 100);
//console.log(population);

//Evalution : 
population = evaluation(population);

//Sélection (rang, tournoi, proportionnelle, uniforme) :
population = selection_tournoi(population);

//Evolution (croisement, mutation)
//population = croisement(population);

//Afficher la réponse
let toRet = "En chantier";
display_answer(toRet);