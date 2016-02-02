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

    $scope.instagramFlux = instagramService.getInstagramFlux();

    // $scope.pics = [];
    
    // $scope.getMore = function() {
    // instagram.getInstagramData(function(instagramData) {
    //     for(var i=0; i<instagramData.length; i++) {
    //       if (typeof $scope.have[instagramData[i].id]==="undefined") {
    //         $scope.pics.push(instagramData[i]) ;
    //         $scope.have[instagramData[i].id] = "1";
    //       }
    //     }
    // });
    // };
    // $scope.getMore();
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
    $scope.sticker = {
        view: 0,
        colors: ["FFFFFF","FFFFFF","FFFFFF"],
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum aperiam consequuntur ipsa nostrum fuga soluta dignissimos nisi deserunt culpa !",
        name: "William",
    };

    // forbidden words for message/name textarea
    var bannedWords = ["bite","cul","chatte","chate","schneck","terroriste","teroriste"]

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
                $scope.colorPickerNames = ["Carrosserie","Pare-brise","Phares"];
                break;
            case "profil":
                $scope.sticker.view = 1;
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
                $scope.sticker.colors[picker] = "F7D14F";
                break;
            case "red":
                $scope.sticker.colors[picker] = "D84D4D";
                break;
            case "green":
                $scope.sticker.colors[picker] = "A6F574";
                break;
            case "blue":
                $scope.sticker.colors[picker] = "90D8FC";
                break;
            case "white":
                $scope.sticker.colors[picker] = "FFFFFF";
                break;
        }
    };

    $scope.chooseMessage = function(){
        var message = $('#sticker-message').val();
        $scope.sticker.message = message;
    }

    $scope.chooseName = function(){
        var name = $('#sticker-name').val();
        $scope.sticker.name = name;
    }

    // Set sticker height + hover animation
    $scope.setStickerStyle = function(){
        var sticker = $('#sticker-custom');
        var stickerWidth = sticker.width();
        var stickerHeight = stickerWidth/2.12;
        
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
    $scope.pageH1 = 'Personnaliser mon sticker';

    // Print sticker 
    $scope.printSticker = function(){
        $scope.pageH1 = 'Imprimer mon sticker';
        $scope.layout = 'print';

        // TODO => SEND DATAS TO PAUL
    }

    // Download sticker
    $scope.downloadSticker = function(){
        $scope.pageH1 = 'Télécharger mon sticker';
        $scope.layout = 'download';
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
