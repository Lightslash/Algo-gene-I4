function display_answer(answer){
    document.getElementById('answer-container').innerHTML = answer;
}

function calculate_answer(population){
  //ON a le tableau des 15 villes mélangées avec leurs coordonnées au départ
  console.log("ville");
  var i = 0;
  var calcd;
  var somme = 0;
  while(i<population.length-1){
    calcd = calculDistance(population[i]["lan"],population[i]["lng"],population[i+1]["lan"],population[i+1]["lng"]);
    console.log("distance "+population[i]["city"]+"-"+population[i+1]["city"]);
    console.log(calcd);
    somme +=  parseFloat(calcd);
    i++
  }
  console.log(somme);


}

/*
  function initMap() {
    var lat = 46.8478;
		var lon = 1.9794;
		var macarte = null;
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
            macarte = L.map('map').setView([lat, lon], 6);

            // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                // Il est toujours bien de laisser le lien vers la source des données
                minZoom: 1,
                maxZoom: 20
            }).addTo(macarte);
        }

*/
function placePoints(population,macarte) {
      var i = 0;
      while (i<population.length-1) {
        var marker = L.marker([population[i]["lan"],population[i]["lng"]]).addTo(macarte);
        i++;
      }

  }
