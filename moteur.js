//créer la population :
var memory = [];
var generation = 1;
var population = [];
while(generation<1000){
    population = createPopulation(cities, 100, population);
    while(population.length>10){
        console.log("Génération ",generation);
        console.log("Population : ", population.length);
        population = evaluation(population);
        population = selection_tournoi(population);
        population = croisement(population);
        if(Math.floor(Math.random()*5)==1){
            population = mutation(population);
        }
        generation++;
    }
}
//Afficher la réponse
let _best = best(evaluation(population));
console.log(_best);
let toRet = calculate_answer(_best);
answer = toRet;
console.log(answer);
var i = 0;

// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 46.8478;
var lon = 1.9794;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 6);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);

    while (i<population[0].length) {
        L.marker([population[0][i]["lan"],population[0][i]["lng"]]).addTo(macarte);
        i++;
        if(i<population[0].length){
            var pointA = new L.LatLng(population[0][i-1]["lan"], population[0][i-1]["lng"]);
            var pointB = new L.LatLng(population[0][i]["lan"], population[0][i]["lng"]);

            var pointList = [pointA, pointB];
            var firstpolyline = new L.Polyline(pointList,{
                color: 'red',
                weight: 3,
                opacity: 0.5,
                smoothFactor: 1
            });
            firstpolyline.addTo(macarte);
        }
    }
}
window.onload = function(){
    initMap();
};
//récupérer la lsite des villes et afficher les pointeurs en la parcourant