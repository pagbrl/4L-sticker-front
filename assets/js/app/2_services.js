app.factory('instagram', ['$http',
        function($http) {
            return {
                fetchPopular: function(callback) {

                    var endPoint = "https://api.instagram.com/v1/users/self/feed?access_token=2882344860.1fb234f.e492b874eaf9422db2473717abe5e2e7 &callback=JSON_CALLBACK";

                    $http.jsonp(endPoint).success(function(response) {
                        var gotInstagram = true;
                        callback(response.instagramData);
                    });
                }
            }
        }
    ]);