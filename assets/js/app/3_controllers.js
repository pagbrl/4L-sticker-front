// CONTROLLERS ============================================
// main controller
app.controller('mainCtrl', function($scope, $location) {
    // Active link menu
    $scope.$on('$routeChangeStart', function(next, current) { 
        $scope.currentUrl = $location.path();
    });
});

// home page controller
app.controller('homeCtrl', function($scope, $rootScope, instagramService) {
    $rootScope.bodyClass = 'page-home';
    $rootScope.pageTitle = '4L Front';
    $scope.instagramFlux = instagramService.getInstagramFlux().then(function(getData){            
            $scope.instagramFlux = getData;
          }, function(msg){ // si promise reject
            $scope.userInfo = msg;
    }); 

});

// direct donation controller
app.controller('directDonationCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-direct-donation';
    $rootScope.pageTitle = '4L Front | Faire un don';
});

// direct donation controller
app.controller('donationValidationCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-direct-donation';
    $rootScope.pageTitle = '4L Front | Faire un don';
});

// create sticker controller
app.controller('stickerCtrl', function($scope, $rootScope, $http) {
    $rootScope.bodyClass = 'page-sticker';
    $rootScope.pageTitle = '4L Front | Personnalise ton sticker';
    
    // Init sticker obejct
    $scope.sticker = {
        view: 0,
        color_0: "FFFFFF",
        color_1: "FFFFFF",
        color_2: "FFFFFF",
        message: "Votre message",
        username: "Votre prénom",
    };

    // forbidden words for message/name textarea
    var bannedWords = [
        "abruti",
        "abrutis",
        "annulingus",
        "anus",
        "asshole",
        "ass",
        "batard",
        "batar",
        "benladen",
        "ben laden",
        "bête",
        "bite",
        "blaireau",
        "blaireaux",
        "bougnoul",
        "branler",
        "branlette",
        "branleur",
        "burne",
        "caca",
        "canabis",
        "chatte",
        "chiasse",
        "chibre",
        "chienne",
        "chienasse",
        "chier",
        "clito",
        "clitoris",
        "cocaine",
        " con ",
        "connard",
        "connasse",
        "couille",
        "couilles",
        "crevure",
        "crotte",
        "cul",
        "cuni",
        "doigter",
        "doigte",
        "emmerde",
        "emmerdeuse",
        "emmerdeur",
        "enculer",
        "enculé",
        "enfoiré",
        "extasy",
        "facho",
        "fasciste",
        "fachiste",
        "fist",
        "foutre",
        "fuck",
        "génital",
        "génitaux",
        "génocide",
        "heroine",
        "hitler",
        "idiot",
        "imbécile",
        "joui",
        "jouir",
        "lopette",
        "lsd",
        "merdasse",
        "merde",
        "merdeuse",
        "miche",
        "mongol",
        "ordure",
        "orgasme",
        "pédale",
        "pd",
        "pédé",
        "pédophile",
        "pedobear",
        "penis",
        "petasse",
        "pisse",
        "pisser",
        "pipi",
        "plan cul",
        "pouf",
        "poufiasse",
        "porn",
        "pucelle",
        "puceau",
        "pute",
        "putain",
        "queue",
        "race",
        "raclure",
        "rebeu",
        "sadomaso",
        "salaud",
        "sale",
        "salope",
        "seins",
        "sexe",
        "sex",
        "sodomie",
        "sperme",
        "suce",
        "tafiole",
        "tantouze",
        "tarlouze",
        "tepu",
        "trouduc",
        "vagin",
        "vaginal",
        "vomi",
        "zizi",
        "zgueg"

    ]

    // Delete Banned Words from string
    $scope.delBannedWords = function(i,string){
        var newString = string.replace(bannedWords[i],'').replace(bannedWords[i].toUpperCase(), ''); 
        return newString;
    }

    // Picker labels by default (for view 0)
    $scope.colorPickerNames = ["Carrosserie","Pare-brise","Phares"];

    // Customize sticker
    $scope.chooseView = function(view){
        var domElem = $('.choose-view > div > a.'+view+'');
        
        domElem.addClass('active');
        domElem.siblings().removeClass('active');

        switch(view) {
            case "face":
                $scope.sticker.view = 0;
                break;
            case "back":
                $scope.sticker.view = 1;
                break;
        }
    };

    $scope.chooseColor = function(picker, color){
        var domElem = $('.choose-color > div > article.'+picker+' > .picker> a.'+color+'');
        
        domElem.addClass('active');
        domElem.siblings().removeClass('active');

        switch(color) {
            case "yellow":
                $scope.sticker[picker] = "F7D14F";
                break;
            case "red":
                $scope.sticker[picker] = "D84D4D";
                break;
            case "green":
                $scope.sticker[picker] = "A6F574";
                break;
            case "blue":
                $scope.sticker[picker] = "90D8FC";
                break;
            case "white":
                $scope.sticker[picker] = "FFFFFF";
                break;
        }

        console.log($scope.sticker);
    };

    $scope.chooseMessage = function(){
        var field = $('#sticker-message');
        for (var i = 0; i < bannedWords.length; i++) {
            var message = field.val();
            field.val($scope.delBannedWords(i,message));
        };
        $scope.sticker.message = message;
    }

    $scope.chooseName = function(){
        var field = $('#sticker-name');
        for (var i = 0; i < bannedWords.length; i++) {
            var name = field.val();
            field.val($scope.delBannedWords(i,name));
        };
        $scope.sticker.username = name;
    }

    // Set sticker height + hover animation
    $scope.setStickerStyle = function(){
        var sticker = $('#sticker-custom');
        var stickerWidth = sticker.width();
        var stickerHeight = stickerWidth/2.108;
        
        // Set scale 
        var stickerContentScale = stickerWidth / 700;
        sticker.css('transform','translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale('+stickerContentScale+')');
        $('#sticker-custom p').css('font-size', stickerContentScale*22+'px');
        $('#sticker-custom span').css('font-size', stickerContentScale*35+'px');

        // Set height
        sticker.height(stickerHeight);

        // Generate animation
        sticker
            .mouseover(function(){
                sticker.mousemove(function(e){
                    mouseScreenPositionX = e.pageX;
                    stickerLeftPosition = sticker.offset().left;
                    mousePosX = ((mouseScreenPositionX - stickerLeftPosition)/stickerWidth);
                    matrix3dX = ((mousePosX/10000)*1.5)-0.0001;

                    mouseScreenPositionY = e.pageY;
                    stickerTopPosition = sticker.offset().top;
                    mousePosY = ((mouseScreenPositionY - stickerTopPosition)/stickerHeight);
                    matrix3dY = ((mousePosY/10000)*1.65)-0.0001;
                    
                    sticker.css('transform', 'translate3d(0,-5px,0) matrix3d(1,0,0.00,'+matrix3dX+',0.00,1,0.00,'+matrix3dY+',0,0,1,0,0,0,0,1) scale('+stickerContentScale*1.04+')');
                });
            })
            .mouseout(function(){
                sticker.css('transform','translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale('+stickerContentScale+')');
            });
    }
    $(window).on('resize', function(){
        $scope.setStickerStyle();
    })

    // Page layout
    $scope.layout = 'customize';

    // Set layout 
    $scope.setLayout = function(layout){
        switch(layout){
            case 'customize':
                $scope.layout = 'customize';
                $scope.pageH1 = 'Personnaliser mon sticker';
                break;
            case 'print':
                $scope.layout = 'print';
                $scope.pageH1 = 'Imprimer mon sticker';
                break;
            case 'download':
                $scope.layout = 'download';
                $scope.pageH1 = 'Télécharger mon sticker';
                break;
        }
    }

    // Print sticker 
    $scope.printSticker = function(){
        $scope.postStickerThenChangeLayout("print");
    }

    // Download sticker
    $scope.downloadSticker = function(){
        $scope.postStickerThenChangeLayout("download");
    }

    // Send object 
    $scope.postStickerThenChangeLayout = function(layout){
        $http.post('http://ao.paul.yt/sticker/new', $scope.ticker).then(function(data){
            console.log("data :");
            console.log(data);
            $scope.setLayout(layout);
        }, function(error){
            console.log("error :");
            console.log(error);
        });

    }

});

// cgu controller
app.controller('cguCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-cgu';
    $rootScope.pageTitle = '4L Front | CGU';
});
