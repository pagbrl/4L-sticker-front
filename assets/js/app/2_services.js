// app.factory('instagram', ['$http',
//         function($http) {
//             return {
//                 fetchPopular: function(callback) {

//                     var endPoint = "https://api.instagram.com/v1/users/self/feed?access_token=2882344860.1fb234f.e492b874eaf9422db2473717abe5e2e7 &callback=JSON_CALLBACK";

//                     $http.jsonp(endPoint).success(function(response) {
//                         var gotInstagram = true;
//                         callback(response.instagramData);
//                     });
//                 }
//             }
//         }
//     ]);


app.service('instagramService', function($http, $q){
  
  var JSONurl = "https://api.instagram.com/v1/users/self/feed?access_token=2882344860.1fb234f.e492b874eaf9422db2473717abe5e2e7";
  var promise = $q.defer();

  var resultTri = [];
  var instagramFlux = [];
  var instagramFlux2 = [
      {
          name: "Lundi 12",
          pictures : [
              {
                  url: "http://twitter.fr/",
                  thumbnail_url: "http://lorempixel.com/560/560/",
                  desc: "Coucou",
              },
              {
                  url: "http://google.fr/",
                  thumbnail_url: "http://lorempixel.com/560/560/",
                  desc: "Coucou",
              },
              {
                  url: "http://facebook.fr/",
                  thumbnail_url: "http://lorempixel.com/560/560/",
                  desc: "Coucou",
              },
          ]
      },
      {
          name: "Dimanche 11",
          pictures : [
              {
                  url: "http://twitter.fr/",
                  thumbnail_url: "http://lorempixel.com/560/560/",
                  desc: "Coucou",
              },
              {
                  url: "http://google.fr/",
                  thumbnail_url: "http://lorempixel.com/560/560/",
                  desc: "Coucou",
              },
              {
                  url: "http://facebook.fr/",
                  thumbnail_url: "http://lorempixel.com/560/560/",
                  desc: "Coucou",
              },
          ]
      }
  ]

  this.getInstagramFlux = function(){
    
  $.ajax({
    url: JSONurl,
    dataType: "jsonp", // this is important to circumvent cross-domain issues
    cache: false,
    success: function(response){      
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
          resultTri[i] = {
                          date: curr_day + " " + m_names[curr_month],
                          url: response.data[i].link,
                          thumbnail_url: response.data[i].images.standard_resolution.url,
                          desc: response.data[i].caption.text,
           };
        } else {
          resultTri[i] = {
                date: curr_day + " " + m_names[curr_month],
                pictures : [
                {
                url: response.data[i].link,
                thumbnail_url: response.data[i].images.standard_resolution.url,
                desc: "",
                }]
          };
        }
      } // fin du for
      
      //On process les résultats
      
      // obj_resultat = objet vide var instagramFlux = [];
      for (var i =0 ; i < resultTri.length ; i++) {           
        instagramFlux.push(resultTri[i]); 
        }
     // pour chaque element de objets
       // obj_resultat crochet date de l'objet crochet PUSH element
      // fin prour
      
      console.log(resultTri);
      console.log(instagramFlux);
      
      
      
      promise.resolve;  
    },
    error: function() {
      promise.reject('Get videos datas error.');
    }
    });
    
    return instagramFlux; 
  };
  
});
