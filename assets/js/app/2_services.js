app.service('instagramService', function($http, $q){
  
  var JSONurl = "https://api.instagram.com/v1/users/self/feed?access_token=2882344860.1fb234f.e492b874eaf9422db2473717abe5e2e7&callback=JSON_CALLBACK";

  var instagramFlux = [];  

  this.getInstagramFlux = function(){
    
  var tempData = [];
  var defered = $q.defer(); //init la promesse
    
  $http.jsonp(JSONurl)
    .success(function (response, status) {
      for (var i = 0; i < response.data.length; i++){
        // Les variables ci-dessous permettent de bien mettre la date
        var postedTime = response.data[i].created_time;
        var pubDate = new Date(postedTime * 1000);
        var m_names = new Array("Janvier", "Février", "Mars", 
"Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", 
"Octobre", "Novembrer", "Décembre");  
        var curr_day = pubDate.getDay();
        var curr_month = pubDate.getMonth();
        
        // Si la photo à une description ou non
        if (response.data[i].caption != null) {
          tempData[i] = {
            name: curr_day + " " + m_names[curr_month],
            pictures : [
              {
              url: response.data[i].link,
              thumbnail_url: response.data[i].images.standard_resolution.url,
              desc: response.data[i].caption.text,
              type: response.data[i].type,
              }
            ]
          }
        } else {
          tempData[i] = {
            name: curr_day + " " + m_names[curr_month],
            pictures : [
              {
                url: response.data[i].link,
                thumbnail_url: response.data[i].images.standard_resolution.url,
                desc: "",
                type: response.data[i].type,
              }
            ]
          }
        }
        
      }; // fin du for

    
    
      //proccess les données
      var foundName = true;
      instagramFlux[0] = tempData[0];
      for (i=1 ; i<tempData.length ; i++) {
        for (j=0 ; j<instagramFlux.length ; j++) {
          if (instagramFlux[j].name == tempData[i].name){
            instagramFlux[j].pictures.push(tempData[i].pictures[0]);
            foundName = true;
            break;
          } else {
            foundName = false;
          }
        }
        
        if (foundName == false) {
          instagramFlux.push(tempData[i]);
        }
      }
      defered.resolve(instagramFlux);
    })
    .error(function(response, status){
      defered.reject('Impossible de recuperer les articles') // promesse raté
    });
        return defered.promise;  
    };
  
});
