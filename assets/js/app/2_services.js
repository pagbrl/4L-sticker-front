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
    var instagramFlux = [
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
        return instagramFlux;
    }
});
