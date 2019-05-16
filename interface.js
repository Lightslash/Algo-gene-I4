function display_answer(answer){
    document.getElementById('answer-container').innerHTML = answer;
}

function calculate_answer(population){
  //GOOGLE MAPS FAIT LE TAF ET ME RENVOIE LA MAP
  //ON a le tableau des 15 villes mélangées avec leurs coordonnées au départ
  console.log("ville");
  var i = 0;
  var calcd;
  while(i<population.length-1){
    calcd = calculDistance(population[i]["lan"],population[i]["lng"],population[i+1]["lan"],population[i+1]["lng"]);
    console.log("distance "+population[i]["city"]+"-"+population[i+1]["city"]);
    console.log(calcd);
    i++
  }

}
