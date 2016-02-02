// CONTROLLERS ============================================
// main controller
app.controller('mainCtrl', function($scope, $location) {
    // Active link menu
    $scope.$on('$routeChangeStart', function(next, current) { 
        $scope.currentUrl = $location.path();
    });
});

// home page controller
app.controller('homeCtrl', function($scope, $rootScope, instagram) {
    $rootScope.bodyClass = 'page-home';
    $rootScope.pageTitle = '4L Front';
    $scope.pics = [];
    
    $scope.getMore = function() {
    instagram.getInstagramData(function(instagramData) {
        for(var i=0; i<instagramData.length; i++) {
          if (typeof $scope.have[instagramData[i].id]==="undefined") {
            $scope.pics.push(instagramData[i]) ;
            $scope.have[instagramData[i].id] = "1";
          }
        }
    });
    };
    $scope.getMore();
});

// direct donation controller
app.controller('directDonationCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-direct-donation';
    $rootScope.pageTitle = '4L Front | Faire un don';
});

// create sticker controller
app.controller('stickerCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-sticker';
    $rootScope.pageTitle = '4L Front | Personnalise ton sticker';
    
    // Init sticker obejct
    var sticker = {
        view: 0,
        colors: ["FFFFFF","FFFFFF","FFFFFF"],
        message: "",
        name: "",
    };

    // forbidden words for message/name textarea
    var bannedWords = ["bite","cul","chatte","chate","schneck","terroriste","teroriste"]

    $scope.colorPickerNames = ["Carrosserie","Pare-brise","Phares"];

    $scope.chooseView = function(view){
        var domElem = $('.choose-view > div > a.'+view+'');
        
        domElem.addClass('active');
        domElem.siblings().removeClass('active');

        switch(view) {
            case "face":
                sticker.view = 0;
                $scope.colorPickerNames = ["Carrosserie","Pare-brise","Phares"];
                break;
            case "profil":
                sticker.view = 1;
                $scope.colorPickerNames = ["Carrosserie","Vitres","Jantes"];
                break;
        }
    };

    $scope.chooseColor = function(picker, color){
        var domElem = $('.choose-color > div > article.'+picker+' > .picker> a.'+color+'');
        
        domElem.addClass('active');
        domElem.siblings().removeClass('active');

        switch(color) {
            case "yellow":
                sticker.colors[picker] = "#F7D14F";
                break;
            case "red":
                sticker.colors[picker] = "#D84D4D";
                break;
            case "green":
                sticker.colors[picker] = "#A6F574";
                break;
            case "blue":
                sticker.colors[picker] = "#90D8FC";
                break;
            case "white":
                sticker.colors[picker] = "#FFFFFF";
                break;
        }
    };

    $scope.chooseMessage = function(){
        var message = $('#sticker-message').val();
        sticker.message = message;

        for (var i = 0; i < bannedWords.length; i++) {
            var subString = bannedWords[i];
            var subStringLength = subString.length;
            message.indexOf(subString)
        };
    }

    $scope.chooseName = function(){
        var name = $('#sticker-name').val();
        sticker.name = name;
    }

});

// about controller
app.controller('aboutCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-about';
    $rootScope.pageTitle = '4L Front | À propos';
});

// cgu controller
app.controller('cguCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-cgu';
    $rootScope.pageTitle = '4L Front | CGU';
});
