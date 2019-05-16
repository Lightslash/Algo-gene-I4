function calculDistance(lat1,long1,lat2,long2){
  var rad = function(x) {
    return x * Math.PI / 180;
  };

  //Bordeaux et Strasbourg
  /*
  lat1 = 44.847807;
  long1 = -0.57947;
  lat2 = 48.540395;
  long2 = 7.727753;
  */
  var getDistance = function(lat1,long1,lat2,long2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(lat2 - lat1);
    var dLong = rad(long2 - long1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d/1000; // returns the distance in meter
  };

  //console.log(getDistance(lat1,long1,lat2,long2));
  return getDistance(lat1,long1,lat2,long2);
}
