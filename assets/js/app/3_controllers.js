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
    $rootScope.pageTitle = "MP GAZ'L";
    $scope.instagramFlux = instagramService.getInstagramFlux().then(function(getData){            
            $scope.instagramFlux = getData;
          }, function(msg){ // si promise reject
            $scope.userInfo = msg;
    }); 

});

// direct donation controller
app.controller('directDonationCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-direct-donation';
    $rootScope.pageTitle = "MP GAZ'L | Faire un don";
});

// direct donation controller
app.controller('donationValidationCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-direct-donation';
    $rootScope.pageTitle = "MP GAZ'L | Faire un don";
});

// create sticker controller
app.controller('stickerCtrl', function($scope, $rootScope, $http) {
    $rootScope.bodyClass = 'page-sticker';
    $rootScope.pageTitle = "MP GAZ'L | Personnalise ton sticker";
    
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
        $http.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
        $http.post('http://ao.paul.yt/api/sticker/new', $scope.sticker,{ withCredentials: true }).then(function(data){
            $scope.stickerID = data.data.id;
            $scope.setLayout(layout);
        }, function(error){
            console.log("error :");
            console.log(error);
        });

        // Generate image
        if (layout == "download") {
            $scope.doCanvas();
        };
    }

    // Draw img
    var canvas = document.getElementById('drawsticker');
    var ctx = canvas.getContext('2d');

    $scope.canvasTextWrap = function(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }

    $scope.doCanvas = function(){
        ctx.fillStyle = '#FFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Text 
        ctx.fillStyle = '#000';
        ctx.font = '22px Roboto';
        ctx.textAlign = 'left';
        var message = $scope.sticker.message;
        $scope.canvasTextWrap(ctx, message, 310, 60, 360, 36);
        ctx.font = 'bold 35px Quicksand';
        ctx.textAlign = 'right';
        ctx.fillText($scope.sticker.username.toUpperCase(), 665, 290);

        // View 
        if ($scope.sticker.view == 0) {
            ctx.save();
            ctx.translate(20,0);
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(280,0);
            ctx.lineTo(280,332);
            ctx.lineTo(0,332);
            ctx.closePath();
            ctx.clip();
            ctx.translate(0,49.843858776728);
            ctx.scale(0.34808552958727,0.34808552958727);
            ctx.translate(0,0);
            ctx.strokeStyle = 'rgba(0,0,0,0)';
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            ctx.miterLimit = 4;
            ctx.save();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_0;
            ctx.beginPath();
            ctx.moveTo(742.8,514.7);
            ctx.bezierCurveTo(742.8,514.7,777.8,321.90000000000003,737.0999999999999,258.40000000000003);
            ctx.bezierCurveTo(696.3999999999999,194.90000000000003,630.0999999999999,187.80000000000004,630.0999999999999,187.80000000000004);
            ctx.bezierCurveTo(630.0999999999999,187.80000000000004,741.3999999999999,212.80000000000004,770.6999999999999,285.6);
            ctx.bezierCurveTo(799.9999999999999,358.40000000000003,791.4,467.8,770.6999999999999,519);
            ctx.bezierCurveTo(740.8,524.3,740.8,524.3,740.8,524.3);
            ctx.lineTo(742.8,514.7);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_0;
            ctx.beginPath();
            ctx.moveTo(695.5,214.9);
            ctx.bezierCurveTo(673.3,197.1,630,187.8,630,187.8);
            ctx.lineTo(539.1,181.60000000000002);
            ctx.lineTo(527.6,186.40000000000003);
            ctx.bezierCurveTo(527.6,186.40000000000003,439.20000000000005,183.70000000000005,427.40000000000003,183.10000000000002);
            ctx.bezierCurveTo(419.20000000000005,177.00000000000003,403.50000000000006,176.20000000000002,403.50000000000006,176.20000000000002);
            ctx.lineTo(401,176.20000000000002);
            ctx.bezierCurveTo(401,176.20000000000002,385.3,177.00000000000003,377.1,183.10000000000002);
            ctx.bezierCurveTo(365.3,183.70000000000002,276.90000000000003,186.40000000000003,276.90000000000003,186.40000000000003);
            ctx.lineTo(265.40000000000003,181.50000000000003);
            ctx.lineTo(174.50000000000003,187.70000000000002);
            ctx.bezierCurveTo(174.50000000000003,187.70000000000002,131.20000000000005,197.00000000000003,109.00000000000003,214.8);
            ctx.bezierCurveTo(86.80000000000003,232.60000000000002,40.70000000000003,262.40000000000003,48.60000000000003,397.4);
            ctx.bezierCurveTo(55.90000000000003,475.9,63.800000000000026,524.3,63.800000000000026,524.3);
            ctx.bezierCurveTo(63.800000000000026,524.3,216.20000000000005,551.4,402.2,544.3);
            ctx.bezierCurveTo(588.2,551.4,740.5999999999999,524.3,740.5999999999999,524.3);
            ctx.bezierCurveTo(740.5999999999999,524.3,748.4999999999999,475.9,755.8,397.4);
            ctx.bezierCurveTo(763.9,262.4,717.8,232.6,695.5,214.9);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_0;
            ctx.beginPath();
            ctx.moveTo(605.8,38.2);
            ctx.bezierCurveTo(597.5,20.6,563,1.6,403.9,2.5);
            ctx.bezierCurveTo(244.8,1.6,206,20.6,197.7,38.2);
            ctx.bezierCurveTo(189.39999999999998,55.800000000000004,152.6,187.89999999999998,152.6,187.89999999999998);
            ctx.lineTo(152.6,193.59999999999997);
            ctx.lineTo(174.1,187.79999999999995);
            ctx.lineTo(255.8,180.29999999999995);
            ctx.lineTo(276.8,186.39999999999995);
            ctx.lineTo(372,183.29999999999995);
            ctx.lineTo(404,176.49999999999994);
            ctx.lineTo(432.4,183.29999999999995);
            ctx.lineTo(527.6999999999999,186.39999999999995);
            ctx.lineTo(548.6999999999999,180.29999999999995);
            ctx.lineTo(629.8,187.79999999999995);
            ctx.lineTo(650.5999999999999,193.59999999999997);
            ctx.lineTo(650.5999999999999,187.89999999999998);
            ctx.bezierCurveTo(650.5,187.9,614.1,55.8,605.8,38.2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_0;
            ctx.beginPath();
            ctx.moveTo(61.8,514.7);
            ctx.bezierCurveTo(61.8,514.7,26.799999999999997,321.90000000000003,67.5,258.40000000000003);
            ctx.bezierCurveTo(108.2,194.90000000000003,174.5,187.80000000000004,174.5,187.80000000000004);
            ctx.bezierCurveTo(174.5,187.80000000000004,63.2,212.80000000000004,33.900000000000006,285.6);
            ctx.bezierCurveTo(4.6000000000000085,358.4,13.200000000000006,467.8,33.900000000000006,519);
            ctx.bezierCurveTo(63.800000000000004,524.3,63.800000000000004,524.3,63.800000000000004,524.3);
            ctx.lineTo(61.8,514.7);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_0;
            ctx.beginPath();
            ctx.moveTo(788.8,512.4);
            ctx.bezierCurveTo(788.8,512.4,786.5,507.2,784.3,515.9);
            ctx.bezierCurveTo(667.1,544.9,400.8,543,400.8,543);
            ctx.bezierCurveTo(400.8,543,137.2,545,20,515.9);
            ctx.bezierCurveTo(17.8,507.2,15.7,512.4,15.7,512.4);
            ctx.bezierCurveTo(15.7,512.4,-7.5,554.4,7.5,567.3);
            ctx.bezierCurveTo(22.5,580.1999999999999,37.9,588.4,144.7,594.0999999999999);
            ctx.bezierCurveTo(244.29999999999998,599.3999999999999,382.6,601.0999999999999,400.6,601.3);
            ctx.lineTo(400.6,601.3);
            ctx.bezierCurveTo(400.6,601.3,400.90000000000003,601.3,401.6,601.3);
            ctx.bezierCurveTo(402.3,601.3,402.6,601.3,402.6,601.3);
            ctx.lineTo(402.6,601.3);
            ctx.bezierCurveTo(421.6,601.0999999999999,559.6,599.4,659.2,594.0999999999999);
            ctx.bezierCurveTo(766,588.4999999999999,782,580.3,796.9000000000001,567.3);
            ctx.bezierCurveTo(811.8000000000002,554.3,788.8,512.4,788.8,512.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(737.5,527.4);
            ctx.lineTo(740.3,514.1999999999999);
            ctx.bezierCurveTo(741,510.5999999999999,774.4,321.3999999999999,734.9,259.79999999999995);
            ctx.bezierCurveTo(717.9,233.29999999999995,696.3,216.79999999999995,677.1,206.49999999999994);
            ctx.bezierCurveTo(651,195.09999999999994,629.7,190.29999999999995,629.4,190.19999999999993);
            ctx.lineTo(630.1999999999999,185.29999999999993);
            ctx.bezierCurveTo(630.9,185.39999999999992,647.4,187.19999999999993,669.1999999999999,196.99999999999991);
            ctx.bezierCurveTo(672.5999999999999,198.49999999999991,676.1999999999999,200.29999999999993,679.9999999999999,202.29999999999993);
            ctx.bezierCurveTo(683.3999999999999,203.79999999999993,686.7999999999998,205.39999999999992,690.2999999999998,207.09999999999994);
            ctx.bezierCurveTo(719.3999999999999,221.29999999999993,757.3999999999999,246.29999999999995,772.7999999999998,284.5999999999999);
            ctx.bezierCurveTo(786.1999999999998,317.8999999999999,792.8999999999999,362.5999999999999,791.6999999999998,410.3999999999999);
            ctx.bezierCurveTo(790.6999999999998,452.19999999999993,783.5999999999998,493.19999999999993,772.7999999999998,519.8999999999999);
            ctx.lineTo(772.2999999999998,521.1999999999998);
            ctx.lineTo(737.5,527.4);
            ctx.closePath();
            ctx.moveTo(711.6,224.5);
            ctx.bezierCurveTo(721.3000000000001,233.2,730.8000000000001,243.9,739.2,257);
            ctx.bezierCurveTo(756.4000000000001,283.8,762.6,335.4,757.7,410.5);
            ctx.bezierCurveTo(754.1,466.1,745.4000000000001,514.6,745.3000000000001,515.1);
            ctx.lineTo(745.3000000000001,515.2);
            ctx.lineTo(744.0000000000001,521.2);
            ctx.lineTo(768.9000000000001,516.8000000000001);
            ctx.bezierCurveTo(779.2,490.6000000000001,785.9000000000001,450.9000000000001,786.9000000000001,410.30000000000007);
            ctx.bezierCurveTo(788.1000000000001,363.20000000000005,781.5000000000001,319.20000000000005,768.3000000000001,286.50000000000006);
            ctx.bezierCurveTo(761.5,269.6,746.1,246.3,711.6,224.5);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(464.8,548);
            ctx.bezierCurveTo(444.5,548,423.6,547.6,402.3,546.8);
            ctx.bezierCurveTo(218.20000000000002,553.8,65,527,63.400000000000034,526.6999999999999);
            ctx.lineTo(61.70000000000003,526.4);
            ctx.lineTo(61.400000000000034,524.6999999999999);
            ctx.bezierCurveTo(61.30000000000003,524.1999999999999,53.400000000000034,475.29999999999995,46.20000000000003,397.5999999999999);
            ctx.bezierCurveTo(38.50000000000003,266.9999999999999,81.40000000000003,233.2999999999999,104.50000000000003,215.1999999999999);
            ctx.bezierCurveTo(105.50000000000003,214.3999999999999,106.50000000000003,213.5999999999999,107.50000000000003,212.8999999999999);
            ctx.bezierCurveTo(129.90000000000003,194.9999999999999,172.3,185.6999999999999,174.10000000000002,185.2999999999999);
            ctx.lineTo(174.50000000000003,185.1999999999999);
            ctx.lineTo(266,178.99999999999991);
            ctx.lineTo(277.5,183.79999999999993);
            ctx.bezierCurveTo(284.8,183.59999999999994,362.8,181.09999999999994,376.4,180.39999999999992);
            ctx.bezierCurveTo(385.2,174.39999999999992,400.29999999999995,173.29999999999993,401,173.19999999999993);
            ctx.lineTo(401.2,173.19999999999993);
            ctx.lineTo(403.9,173.19999999999993);
            ctx.bezierCurveTo(404.59999999999997,173.19999999999993,419.7,174.39999999999992,428.5,180.39999999999992);
            ctx.bezierCurveTo(442,180.99999999999991,520,183.5999999999999,527.4,183.89999999999992);
            ctx.lineTo(538.9,178.99999999999991);
            ctx.lineTo(539.5,178.99999999999991);
            ctx.lineTo(630.6,185.1999999999999);
            ctx.lineTo(630.8000000000001,185.1999999999999);
            ctx.bezierCurveTo(632.6,185.5999999999999,674.9000000000001,194.7999999999999,697.4000000000001,212.6999999999999);
            ctx.bezierCurveTo(698.4000000000001,213.49999999999991,699.3000000000001,214.1999999999999,700.4000000000001,214.99999999999991);
            ctx.bezierCurveTo(723.5000000000001,233.0999999999999,766.4000000000001,266.7999999999999,758.7,397.29999999999995);
            ctx.bezierCurveTo(751.5,475.09999999999997,743.5,524,743.5,524.5);
            ctx.lineTo(743.2,526.2);
            ctx.lineTo(741.5,526.5);
            ctx.bezierCurveTo(739.8,527,619.8,548,464.8,548);
            ctx.closePath();
            ctx.moveTo(402.3,541.9);
            ctx.lineTo(402.3,541.9);
            ctx.bezierCurveTo(575.4,548.5,721,525.1999999999999,738.5,522.1999999999999);
            ctx.bezierCurveTo(740,512.8,747,466.49999999999994,753.4,397.19999999999993);
            ctx.bezierCurveTo(756.6999999999999,341.79999999999995,751,297.8999999999999,736.5,266.69999999999993);
            ctx.bezierCurveTo(724.3,240.59999999999994,708.6,228.19999999999993,697,219.09999999999994);
            ctx.bezierCurveTo(696,218.29999999999993,695,217.49999999999994,694,216.69999999999993);
            ctx.bezierCurveTo(673.2,200.09999999999994,632.7,190.79999999999993,629.7,190.19999999999993);
            ctx.lineTo(539.6,184.09999999999994);
            ctx.lineTo(528.1,188.89999999999995);
            ctx.lineTo(527.6,188.89999999999995);
            ctx.bezierCurveTo(526.7,188.89999999999995,439.1,185.99999999999994,427.40000000000003,185.39999999999995);
            ctx.lineTo(426.6,185.39999999999995);
            ctx.lineTo(426,184.99999999999994);
            ctx.bezierCurveTo(418.8,179.69999999999993,404.7,178.39999999999995,403.5,178.29999999999995);
            ctx.lineTo(401.1,178.29999999999995);
            ctx.bezierCurveTo(399.90000000000003,178.39999999999995,385.8,179.59999999999997,378.6,184.99999999999994);
            ctx.lineTo(378,185.39999999999995);
            ctx.lineTo(377.2,185.39999999999995);
            ctx.bezierCurveTo(365.5,185.99999999999994,277.9,188.79999999999995,277,188.79999999999995);
            ctx.lineTo(276.5,188.79999999999995);
            ctx.lineTo(265,183.99999999999994);
            ctx.lineTo(174.9,190.09999999999994);
            ctx.bezierCurveTo(171.9,190.79999999999993,131.4,199.99999999999994,110.60000000000001,216.59999999999994);
            ctx.bezierCurveTo(109.60000000000001,217.39999999999995,108.60000000000001,218.19999999999993,107.60000000000001,218.99999999999994);
            ctx.bezierCurveTo(96.10000000000001,228.09999999999994,80.30000000000001,240.49999999999994,68.10000000000001,266.59999999999997);
            ctx.bezierCurveTo(53.60000000000001,297.7,47.900000000000006,341.69999999999993,51.20000000000001,397.19999999999993);
            ctx.bezierCurveTo(57.60000000000001,466.3999999999999,64.60000000000001,512.6999999999999,66.10000000000001,522.0999999999999);
            ctx.bezierCurveTo(83.5,525.1,229.2,548.5,402.3,541.9);
            ctx.lineTo(402.3,541.9);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(682.5,332.3);
            ctx.lineTo(402.5,332.3);
            ctx.lineTo(402,332.3);
            ctx.lineTo(122,332.3);
            ctx.bezierCurveTo(122,332.3,83.8,328.5,91,384.5);
            ctx.bezierCurveTo(98.2,440.5,104.8,454.3,133.8,454.3);
            ctx.bezierCurveTo(160.70000000000002,454.3,370.9,454.3,400.5,454.3);
            ctx.bezierCurveTo(400.5,454.3,401.7,454.3,404,454.3);
            ctx.bezierCurveTo(433.6,454.3,643.8,454.3,670.7,454.3);
            ctx.bezierCurveTo(699.7,454.3,706.3000000000001,440.5,713.5,384.5);
            ctx.bezierCurveTo(720.7,328.5,682.5,332.3,682.5,332.3);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(569.7,246.1);
            ctx.lineTo(564.7,245.4);
            ctx.bezierCurveTo(564.7,245.1,568.9000000000001,211.10000000000002,537.4000000000001,183.4);
            ctx.lineTo(540.7,179.6);
            ctx.bezierCurveTo(574.4,209.3,569.9,244.7,569.7,246.1);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(424.2,244.2);
            ctx.lineTo(419.5,242.6);
            ctx.bezierCurveTo(419.6,242.4,426.5,221,424,183.2);
            ctx.lineTo(429,182.89999999999998);
            ctx.bezierCurveTo(431.5,221.8,424.5,243.3,424.2,244.2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(653.5,196.9);
            ctx.lineTo(629.5,190.3);
            ctx.lineTo(548.8,182.9);
            ctx.lineTo(527.9,189);
            ctx.lineTo(432,185.9);
            ctx.lineTo(404,179.20000000000002);
            ctx.lineTo(372.3,185.9);
            ctx.lineTo(276.5,189);
            ctx.lineTo(255.6,182.9);
            ctx.lineTo(174.7,190.3);
            ctx.lineTo(150.5,196.9);
            ctx.lineTo(150.5,187.5);
            ctx.lineTo(150.6,187.2);
            ctx.bezierCurveTo(152.1,181.79999999999998,187.39999999999998,54.69999999999999,195.7,37.099999999999994);
            ctx.bezierCurveTo(201.2,25.499999999999993,216.89999999999998,16.999999999999993,243.89999999999998,10.999999999999993);
            ctx.bezierCurveTo(278.3,3.3,332.2,-0.4,404,0);
            ctx.bezierCurveTo(476.6,-0.4,528.4,3.2,562.1,11);
            ctx.bezierCurveTo(588,17,602.7,25.3,608.3000000000001,37.1);
            ctx.lineTo(608.3000000000001,37.1);
            ctx.bezierCurveTo(616.6,54.7,651.9000000000001,181.79999999999998,653.4000000000001,187.2);
            ctx.lineTo(653.5000000000001,187.5);
            ctx.lineTo(653.5000000000001,196.9);
            ctx.closePath();
            ctx.moveTo(155.5,188.2);
            ctx.lineTo(155.5,190.29999999999998);
            ctx.lineTo(174.1,185.29999999999998);
            ctx.lineTo(256.1,177.79999999999998);
            ctx.lineTo(277.1,183.99999999999997);
            ctx.lineTo(371.6,180.89999999999998);
            ctx.lineTo(404,174);
            ctx.lineTo(432.7,180.9);
            ctx.lineTo(527.3,184);
            ctx.lineTo(548.4,177.8);
            ctx.lineTo(630.6999999999999,185.4);
            ctx.lineTo(648.5999999999999,190.3);
            ctx.lineTo(648.5999999999999,188.20000000000002);
            ctx.bezierCurveTo(646.5999999999999,180.9,611.8,56.10000000000002,603.8999999999999,39.30000000000001);
            ctx.bezierCurveTo(602.0999999999999,35.500000000000014,596.6999999999998,24.100000000000012,561.0999999999999,15.900000000000013);
            ctx.bezierCurveTo(528.2,8.3,475.3,4.6,404,5);
            ctx.bezierCurveTo(279.9,4.3,211.3,15.8,200.2,39.3);
            ctx.bezierCurveTo(192.3,56.1,157.6,180.9,155.5,188.2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(651,187.9);
            ctx.bezierCurveTo(651,187.9,690.1,187,695.2,186.3);
            ctx.bezierCurveTo(700.2,185.60000000000002,702.3000000000001,187.70000000000002,702.3000000000001,166.3);
            ctx.bezierCurveTo(702.3000000000001,144.9,681.3000000000001,149.5,669.5000000000001,148.70000000000002);
            ctx.bezierCurveTo(657.7000000000002,147.9,648.1000000000001,148.70000000000002,648.1000000000001,152.70000000000002);
            ctx.bezierCurveTo(648.1000000000001,156.70000000000002,643.0000000000001,163.9,643.0000000000001,163.9);
            ctx.lineTo(651,187.9);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(721.4,667.4);
            ctx.bezierCurveTo(739.3,667.4,759.3,657.9,761.4,626.8);
            ctx.bezierCurveTo(763.5,595.6999999999999,764.5,583,764.5,583);
            ctx.bezierCurveTo(764.5,583,719,592.8,704.6,591.1);
            ctx.bezierCurveTo(690.2,589.4000000000001,685.8000000000001,590.4,685.8000000000001,590.4);
            ctx.bezierCurveTo(685.8000000000001,590.4,686.1,623.1,685.8000000000001,645.1999999999999);
            ctx.bezierCurveTo(685.5000000000001,667.2999999999998,721.4,667.4,721.4,667.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(398.5,603.8);
            ctx.lineTo(398.5,603.8);
            ctx.bezierCurveTo(374.1,603.4,240.9,601.5999999999999,144.7,596.5);
            ctx.bezierCurveTo(35.89999999999999,590.8,20.999999999999986,582.4,5.699999999999989,569.1);
            ctx.bezierCurveTo(-10.300000000000011,555.2,11.699999999999989,514.2,13.299999999999988,511.20000000000005);
            ctx.bezierCurveTo(13.999999999999988,509.70000000000005,15.299999999999988,508.1,17.29999999999999,508.20000000000005);
            ctx.bezierCurveTo(19.69999999999999,508.40000000000003,20.99999999999999,510.90000000000003,21.79999999999999,513.7);
            ctx.bezierCurveTo(138.1,542,397.90000000000003,540.4000000000001,400.6,540.4000000000001);
            ctx.bezierCurveTo(403.3,540.4000000000001,665.8,542.0000000000001,782.1,513.7);
            ctx.bezierCurveTo(782.9,510.90000000000003,784.2,508.40000000000003,786.7,508.20000000000005);
            ctx.bezierCurveTo(788.7,508.00000000000006,790.2,509.6,790.9000000000001,511.1);
            ctx.bezierCurveTo(792.4000000000001,513.8000000000001,814.5000000000001,555.1,798.4000000000001,569.1);
            ctx.bezierCurveTo(783.2,582.3000000000001,768.3000000000001,590.7,659.3000000000001,596.5);
            ctx.bezierCurveTo(563.1,601.6,429.70000000000005,603.4,405.30000000000007,603.7);
            ctx.lineTo(405.30000000000007,603.8000000000001);
            ctx.lineTo(401.80000000000007,603.8000000000001);
            ctx.lineTo(398.5,603.8);
            ctx.closePath();
            ctx.moveTo(17.1,515);
            ctx.bezierCurveTo(10.700000000000001,527.2,-1.5,556.3,9.100000000000001,565.5);
            ctx.bezierCurveTo(21.6,576.3,32.400000000000006,585.7,145.1,591.7);
            ctx.bezierCurveTo(245.2,597,385.5,598.7,401.1,598.9000000000001);
            ctx.lineTo(402.3,598.9000000000001);
            ctx.lineTo(403,598.9000000000001);
            ctx.bezierCurveTo(418.7,598.7,559.2,597.0000000000001,659.2,591.7);
            ctx.bezierCurveTo(764.4000000000001,586.1,780.8000000000001,578.1,795.3000000000001,565.5);
            ctx.bezierCurveTo(805.9000000000001,556.3,793.6,526.8,787.2,514.8);
            ctx.bezierCurveTo(787,515.3,786.9000000000001,515.9,786.7,516.5999999999999);
            ctx.lineTo(786.3000000000001,518.0999999999999);
            ctx.lineTo(784.8000000000001,518.4999999999999);
            ctx.bezierCurveTo(668.6,547.2999999999998,403.30000000000007,545.6999999999999,400.6000000000001,545.6999999999999);
            ctx.bezierCurveTo(398.00000000000006,545.6999999999999,135.4000000000001,547.3,19.200000000000102,518.4999999999999);
            ctx.lineTo(17.700000000000102,518.0999999999999);
            ctx.lineTo(17.300000000000104,516.5999999999999);
            ctx.bezierCurveTo(17.4,515.9,17.3,515.4,17.1,515);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(67.1,527.4);
            ctx.lineTo(32.199999999999996,521.1999999999999);
            ctx.lineTo(31.699999999999996,519.9);
            ctx.bezierCurveTo(20.899999999999995,493.2,13.799999999999997,452.2,12.799999999999997,410.4);
            ctx.bezierCurveTo(11.599999999999998,362.59999999999997,18.299999999999997,317.9,31.699999999999996,284.59999999999997);
            ctx.bezierCurveTo(47.099999999999994,246.29999999999995,85.1,221.29999999999995,114.19999999999999,207.09999999999997);
            ctx.bezierCurveTo(117.69999999999999,205.39999999999998,121.19999999999999,203.79999999999995,124.49999999999999,202.29999999999995);
            ctx.bezierCurveTo(128.29999999999998,200.29999999999995,131.89999999999998,198.49999999999994,135.29999999999998,196.99999999999994);
            ctx.bezierCurveTo(157.1,187.19999999999993,173.59999999999997,185.39999999999995,174.29999999999998,185.29999999999995);
            ctx.lineTo(175.1,190.19999999999996);
            ctx.bezierCurveTo(174.9,190.29999999999995,153.6,195.09999999999997,127.69999999999999,206.39999999999995);
            ctx.bezierCurveTo(108.39999999999999,216.69999999999996,86.69999999999999,233.19999999999996,69.6,259.79999999999995);
            ctx.bezierCurveTo(30.099999999999994,321.49999999999994,63.599999999999994,510.59999999999997,64.19999999999999,514.1999999999999);
            ctx.lineTo(67.1,527.4);
            ctx.closePath();
            ctx.moveTo(35.8,516.8);
            ctx.lineTo(60.699999999999996,521.1999999999999);
            ctx.lineTo(59.4,515.0999999999999);
            ctx.bezierCurveTo(59.3,514.5999999999999,50.599999999999994,466.0999999999999,47,410.4999999999999);
            ctx.bezierCurveTo(42.1,335.4999999999999,48.3,283.7999999999999,65.5,256.9999999999999);
            ctx.bezierCurveTo(73.9,243.8999999999999,83.3,233.19999999999987,93,224.4999999999999);
            ctx.bezierCurveTo(70.3,238.7999999999999,47.4,259.0999999999999,36.4,286.2999999999999);
            ctx.bezierCurveTo(23.299999999999997,318.9999999999999,16.7,362.9999999999999,17.799999999999997,410.0999999999999);
            ctx.bezierCurveTo(18.7,450.9,25.5,490.5,35.8,516.8);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(222.9,622.2);
            ctx.lineTo(231.20000000000002,622.2);
            ctx.bezierCurveTo(240.20000000000002,622.2,247.50000000000003,614.9000000000001,247.50000000000003,605.9000000000001);
            ctx.lineTo(247.50000000000003,531.1000000000001);
            ctx.bezierCurveTo(247.50000000000003,522.1000000000001,240.20000000000002,514.8000000000002,231.20000000000002,514.8000000000002);
            ctx.lineTo(222.9,514.8000000000002);
            ctx.bezierCurveTo(213.9,514.8000000000002,206.6,522.1000000000001,206.6,531.1000000000001);
            ctx.lineTo(206.6,605.9000000000001);
            ctx.bezierCurveTo(206.6,614.9,213.9,622.2,222.9,622.2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_2;
            ctx.beginPath();
            ctx.arc(645.6,393.3,40.2,0,6.283185307179586,true);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_2;
            ctx.beginPath();
            ctx.arc(158.9,393.3,40.2,0,6.283185307179586,true);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(234.8,246.1);
            ctx.bezierCurveTo(234.60000000000002,244.6,230.10000000000002,209.2,263.8,179.7);
            ctx.lineTo(267.1,183.5);
            ctx.bezierCurveTo(235.50000000000003,211.2,239.70000000000002,245.1,239.8,245.5);
            ctx.lineTo(234.8,246.1);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(380.3,244.2);
            ctx.bezierCurveTo(380,243.29999999999998,373,221.79999999999998,375.6,182.89999999999998);
            ctx.lineTo(380.6,183.2);
            ctx.bezierCurveTo(378.1,221,385,242.29999999999998,385.1,242.6);
            ctx.lineTo(380.3,244.2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(521.8,157);
            ctx.bezierCurveTo(509.59999999999997,153.8,403.49999999999994,152.5,403.49999999999994,152.5);
            ctx.bezierCurveTo(403.49999999999994,152.5,294.5999999999999,153.7,282.4,157);
            ctx.bezierCurveTo(270.2,160.2,284.09999999999997,186.2,284.09999999999997,186.2);
            ctx.lineTo(371.79999999999995,183.29999999999998);
            ctx.bezierCurveTo(371.79999999999995,183.29999999999998,394.29999999999995,179.6,404.49999999999994,176.6);
            ctx.bezierCurveTo(411.49999999999994,179.5,432.19999999999993,183.29999999999998,432.19999999999993,183.29999999999998);
            ctx.lineTo(520.0999999999999,186.2);
            ctx.bezierCurveTo(520.2,186.2,534,160.2,521.8,157);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(153.5,187.9);
            ctx.bezierCurveTo(153.5,187.9,114.4,187,109.3,186.3);
            ctx.bezierCurveTo(104.3,185.60000000000002,102.2,187.70000000000002,102.2,166.3);
            ctx.bezierCurveTo(102.2,144.9,123.2,149.5,135,148.70000000000002);
            ctx.bezierCurveTo(146.8,147.90000000000003,156.4,148.70000000000002,156.4,152.70000000000002);
            ctx.bezierCurveTo(156.4,156.70000000000002,161.5,163.9,161.5,163.9);
            ctx.lineTo(153.5,187.9);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_1;
            ctx.beginPath();
            ctx.moveTo(615.8,103.9);
            ctx.bezierCurveTo(602.4,55.800000000000004,606.5,35.10000000000001,536.1999999999999,30);
            ctx.bezierCurveTo(475.99999999999994,25.6,418.8999999999999,25.7,402.29999999999995,25.8);
            ctx.bezierCurveTo(387.9,25.7,328.29999999999995,25.6,267.99999999999994,30);
            ctx.bezierCurveTo(197.69999999999993,35.2,201.99999999999994,55.9,188.49999999999994,103.9);
            ctx.bezierCurveTo(175.09999999999994,152,199.79999999999995,146.3,216.29999999999995,148.3);
            ctx.bezierCurveTo(231.39999999999995,150.10000000000002,400.9,147.4,400.9,147.4);
            ctx.bezierCurveTo(400.9,147.4,572.7,150.1,587.8,148.3);
            ctx.bezierCurveTo(604.4,146.3,629.3,152,615.8,103.9);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(552.2,151.4);
            ctx.bezierCurveTo(498.80000000000007,151.4,406.30000000000007,150,401.00000000000006,149.9);
            ctx.bezierCurveTo(394.1000000000001,150,231.20000000000005,152.6,216.10000000000005,150.8);
            ctx.bezierCurveTo(214.10000000000005,150.60000000000002,211.90000000000006,150.4,209.70000000000005,150.3);
            ctx.bezierCurveTo(201.20000000000005,149.8,191.50000000000006,149.3,186.20000000000005,141.8);
            ctx.bezierCurveTo(180.90000000000003,134.4,181.00000000000006,122.20000000000002,186.20000000000005,103.30000000000001);
            ctx.bezierCurveTo(187.80000000000004,97.50000000000001,189.20000000000005,92.20000000000002,190.50000000000006,87.10000000000001);
            ctx.bezierCurveTo(199.70000000000005,50.60000000000001,204.30000000000007,32.30000000000001,267.9000000000001,27.60000000000001);
            ctx.bezierCurveTo(329.9000000000001,23.000000000000007,390.80000000000007,23.300000000000008,402.4000000000001,23.40000000000001);
            ctx.bezierCurveTo(423.4000000000001,23.20000000000001,478.5000000000001,23.300000000000008,536.4000000000001,27.60000000000001);
            ctx.bezierCurveTo(600.1000000000001,32.30000000000001,604.8000000000001,50.70000000000001,614.1000000000001,87.30000000000001);
            ctx.bezierCurveTo(615.4000000000001,92.4,616.7000000000002,97.60000000000001,618.3000000000002,103.30000000000001);
            ctx.bezierCurveTo(623.6000000000001,122.20000000000002,623.6000000000001,134.4,618.3000000000002,141.8);
            ctx.bezierCurveTo(612.9000000000002,149.3,603.2000000000002,149.9,594.7000000000002,150.4);
            ctx.bezierCurveTo(592.4000000000002,150.5,590.3000000000002,150.70000000000002,588.3000000000002,150.9);
            ctx.bezierCurveTo(584.3,151.2,570.6,151.4,552.2,151.4);
            ctx.closePath();
            ctx.moveTo(401,144.9);
            ctx.bezierCurveTo(402.8,144.9,572.9,147.6,587.6,145.8);
            ctx.bezierCurveTo(589.8000000000001,145.5,592.1,145.4,594.4,145.3);
            ctx.bezierCurveTo(602.1999999999999,144.9,610.1999999999999,144.4,614.1999999999999,138.8);
            ctx.bezierCurveTo(618.4,132.9,618.0999999999999,121.4,613.4,104.60000000000001);
            ctx.lineTo(613.4,104.60000000000001);
            ctx.bezierCurveTo(611.8,98.80000000000001,610.4,93.50000000000001,609.1999999999999,88.4);
            ctx.bezierCurveTo(599.9999999999999,51.900000000000006,596.1999999999999,36.800000000000004,535.9999999999999,32.400000000000006);
            ctx.bezierCurveTo(478.2999999999999,28.200000000000006,423.2999999999999,28.100000000000005,402.2999999999999,28.200000000000006);
            ctx.bezierCurveTo(390.6999999999999,28.100000000000005,330.0999999999999,27.800000000000008,268.19999999999993,32.400000000000006);
            ctx.bezierCurveTo(208.19999999999993,36.800000000000004,204.39999999999992,51.800000000000004,195.19999999999993,88.2);
            ctx.bezierCurveTo(193.89999999999992,93.4,192.49999999999994,98.7,190.89999999999992,104.6);
            ctx.bezierCurveTo(186.19999999999993,121.5,185.89999999999992,133,190.0999999999999,138.8);
            ctx.bezierCurveTo(194.0999999999999,144.4,202.0999999999999,144.8,209.7999999999999,145.3);
            ctx.bezierCurveTo(211.9999999999999,145.4,214.3999999999999,145.60000000000002,216.4999999999999,145.8);
            ctx.bezierCurveTo(231.4,147.5,399.3,144.9,401,144.9);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(83.1,667.4);
            ctx.bezierCurveTo(65.19999999999999,667.4,45.199999999999996,657.9,43.099999999999994,626.8);
            ctx.bezierCurveTo(41,595.7,40,583,40,583);
            ctx.bezierCurveTo(40,583,85.5,592.8,99.9,591.1);
            ctx.bezierCurveTo(114.30000000000001,589.4000000000001,118.7,590.4,118.7,590.4);
            ctx.bezierCurveTo(118.7,590.4,118.4,623.1,118.7,645.1999999999999);
            ctx.bezierCurveTo(119,667.2999999999998,83.1,667.4,83.1,667.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(581.6,622.2);
            ctx.lineTo(573.3000000000001,622.2);
            ctx.bezierCurveTo(564.3000000000001,622.2,557.0000000000001,614.9000000000001,557.0000000000001,605.9000000000001);
            ctx.lineTo(557.0000000000001,531.1000000000001);
            ctx.bezierCurveTo(557.0000000000001,522.1000000000001,564.3000000000001,514.8000000000002,573.3000000000001,514.8000000000002);
            ctx.lineTo(581.6,514.8000000000002);
            ctx.bezierCurveTo(590.6,514.8000000000002,597.9,522.1000000000001,597.9,531.1000000000001);
            ctx.lineTo(597.9,605.9000000000001);
            ctx.bezierCurveTo(598,614.9,590.6,622.2,581.6,622.2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
        } else if ($scope.sticker.view == 1){
            ctx.save();
            ctx.translate(20,0);
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(280,0);
            ctx.lineTo(280,332);
            ctx.lineTo(0,332);
            ctx.closePath();
            ctx.clip();
            ctx.translate(0,47.719752936902026);
            ctx.scale(0.33910621291025794,0.33910621291025794);
            ctx.translate(0,0);
            ctx.strokeStyle = 'rgba(0,0,0,0)';
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            ctx.miterLimit = 4;
            ctx.save();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_0;
            ctx.beginPath();
            ctx.moveTo(698.4,87.9);
            ctx.bezierCurveTo(698.4,87.9,680.3,34.400000000000006,581.9,16.60000000000001);
            ctx.bezierCurveTo(492.1,0.4,424,2.4,412.7,2.8);
            ctx.bezierCurveTo(401.4,2.3,333.1,0.3999999999999999,243.29999999999998,16.6);
            ctx.bezierCurveTo(144.89999999999998,34.400000000000006,126.39999999999998,87.9,126.39999999999998,87.9);
            ctx.lineTo(126.39999999999998,103.60000000000001);
            ctx.lineTo(412.4,61.50000000000001);
            ctx.lineTo(698.4,103.60000000000001);
            ctx.lineTo(698.4,87.9);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(124.4,106.5);
            ctx.lineTo(124.4,87.5);
            ctx.lineTo(124.5,87.1);
            ctx.bezierCurveTo(124.7,86.5,129.5,72.89999999999999,146.6,57.099999999999994);
            ctx.bezierCurveTo(162.2,42.599999999999994,191.7,23.499999999999993,243.1,14.199999999999996);
            ctx.bezierCurveTo(332.4,-1.9,399.9,-0.2,412.9,0.3);
            ctx.bezierCurveTo(425.79999999999995,-0.2,493.4,-1.9999999999999998,582.5999999999999,14.200000000000001);
            ctx.bezierCurveTo(610.9999999999999,19.3,650.8,30.9,679.1999999999999,57.1);
            ctx.bezierCurveTo(696.4,72.9,701.0999999999999,86.5,701.3,87.1);
            ctx.lineTo(701.4,87.5);
            ctx.lineTo(701.4,106.5);
            ctx.lineTo(412.9,64.1);
            ctx.lineTo(124.4,106.5);
            ctx.closePath();
            ctx.moveTo(412.9,59);
            ctx.lineTo(413.29999999999995,59.1);
            ctx.lineTo(696.5,100.7);
            ctx.lineTo(696.5,88.4);
            ctx.bezierCurveTo(695.6,86.2,690.4,74.2,675.5,60.60000000000001);
            ctx.bezierCurveTo(648,35.400000000000006,609.3,24.20000000000001,581.7,19.20000000000001);
            ctx.bezierCurveTo(492.7,3,425.5,4.8,413,5.3);
            ctx.lineTo(412.9,5.3);
            ctx.lineTo(412.79999999999995,5.3);
            ctx.bezierCurveTo(400.2,4.8,333,3,244.1,19.1);
            ctx.bezierCurveTo(152.39999999999998,35.7,131.3,83.69999999999999,129.5,88.4);
            ctx.lineTo(129.5,100.7);
            ctx.lineTo(412.9,59);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_0;
            ctx.beginPath();
            ctx.moveTo(42.1,583.2);
            ctx.bezierCurveTo(42.1,583.2,56.2,380.1,57.900000000000006,356.30000000000007);
            ctx.bezierCurveTo(59.2,337.6000000000001,66.2,321.4000000000001,79.5,314.4000000000001);
            ctx.bezierCurveTo(87.6,310.1000000000001,93.4,302.4000000000001,95.1,293.4000000000001);
            ctx.bezierCurveTo(106.1,234.9000000000001,131.6,103.00000000000009,131.6,103.00000000000009);
            ctx.lineTo(251,73.8);
            ctx.lineTo(163.6,561.4);
            ctx.lineTo(124.3,593.1);
            ctx.lineTo(42.1,583.2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(125,595.8);
            ctx.lineTo(39.5,585.4);
            ctx.lineTo(39.7,583);
            ctx.bezierCurveTo(39.800000000000004,581,53.800000000000004,379.6,55.5,356.1);
            ctx.bezierCurveTo(57,335.1,65.4,319,78.5,312.20000000000005);
            ctx.bezierCurveTo(86.1,308.20000000000005,91.3,301.20000000000005,92.8,293.00000000000006);
            ctx.bezierCurveTo(103.7,235.20000000000005,129,103.90000000000006,129.3,102.60000000000005);
            ctx.lineTo(129.60000000000002,101.00000000000006);
            ctx.lineTo(254.3,70.50000000000006);
            ctx.lineTo(166,562.8000000000001);
            ctx.lineTo(125,595.8);
            ctx.closePath();
            ctx.moveTo(44.8,581);
            ctx.lineTo(123.5,590.5);
            ctx.lineTo(161.3,560);
            ctx.lineTo(247.9,77.10000000000002);
            ctx.lineTo(133.8,105.00000000000003);
            ctx.bezierCurveTo(130.9,120.10000000000002,107.9,239.50000000000003,97.70000000000002,293.80000000000007);
            ctx.bezierCurveTo(95.90000000000002,303.6000000000001,89.70000000000002,311.9000000000001,80.80000000000001,316.50000000000006);
            ctx.bezierCurveTo(69.30000000000001,322.50000000000006,61.90000000000001,337.1000000000001,60.500000000000014,356.30000000000007);
            ctx.bezierCurveTo(58.8,378.6,46.4,558.2,44.8,581);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_0;
            ctx.beginPath();
            ctx.moveTo(783.5,583.2);
            ctx.bezierCurveTo(783.5,583.2,769.4,380.1,767.7,356.30000000000007);
            ctx.bezierCurveTo(766.4000000000001,337.6000000000001,759.4000000000001,321.4000000000001,746.1,314.4000000000001);
            ctx.bezierCurveTo(738,310.1000000000001,732.2,302.4000000000001,730.5,293.4000000000001);
            ctx.bezierCurveTo(719.6,235,694.1,103,694.1,103);
            ctx.lineTo(574.7,73.8);
            ctx.lineTo(662.1,561.4);
            ctx.lineTo(701.4,593.1);
            ctx.lineTo(783.5,583.2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(700.7,595.8);
            ctx.lineTo(659.8000000000001,562.8);
            ctx.lineTo(659.6,561.9);
            ctx.lineTo(571.6,70.5);
            ctx.lineTo(696.2,101);
            ctx.lineTo(696.5,102.6);
            ctx.bezierCurveTo(696.8,103.89999999999999,722.1,235.2,733,293);
            ctx.bezierCurveTo(734.6,301.3,739.8,308.3,747.3,312.2);
            ctx.bezierCurveTo(760.4,319.09999999999997,768.6999999999999,335.09999999999997,770.3,356.09999999999997);
            ctx.bezierCurveTo(772,379.6,785.9,581,786,583);
            ctx.lineTo(786.2,585.4);
            ctx.lineTo(700.7,595.8);
            ctx.closePath();
            ctx.moveTo(664.4,560.1);
            ctx.lineTo(702.1999999999999,590.6);
            ctx.lineTo(780.9,581.1);
            ctx.bezierCurveTo(779.3,558.3000000000001,766.9,378.70000000000005,765.3,356.6);
            ctx.bezierCurveTo(763.9,337.3,756.5,322.8,745,316.8);
            ctx.bezierCurveTo(736.1,312.1,729.9,303.8,728.1,294.1);
            ctx.bezierCurveTo(717.9,239.70000000000002,694.9,120.40000000000003,692,105.30000000000001);
            ctx.lineTo(577.8,77.1);
            ctx.lineTo(664.4,560.1);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_0;
            ctx.beginPath();
            ctx.moveTo(669.4,134.4);
            ctx.bezierCurveTo(667.8,116.10000000000001,659.6,90,638.8,84.60000000000001);
            ctx.bezierCurveTo(544.6999999999999,60.00000000000001,429.69999999999993,59.10000000000001,412.79999999999995,59.20000000000001);
            ctx.bezierCurveTo(395.9,59.00000000000001,281.9,59.70000000000001,186.79999999999995,84.50000000000001);
            ctx.bezierCurveTo(165.99999999999994,89.90000000000002,157.79999999999995,116.10000000000002,156.19999999999996,134.4);
            ctx.lineTo(121.29999999999995,557.4);
            ctx.lineTo(410.69999999999993,557.4);
            ctx.lineTo(414.8999999999999,557.4);
            ctx.lineTo(704.3,557.4);
            ctx.lineTo(669.4,134.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(707,559.4);
            ctx.lineTo(118.6,559.4);
            ctx.lineTo(153.7,134);
            ctx.bezierCurveTo(155.5,112.5,165,87.6,186.2,82.1);
            ctx.bezierCurveTo(287,55.8,407.8,56.6,412.9,56.7);
            ctx.bezierCurveTo(414.09999999999997,56.7,539.3,55.900000000000006,639.7,82.1);
            ctx.bezierCurveTo(660.8000000000001,87.6,670.4000000000001,112.5,672.4000000000001,134);
            ctx.lineTo(672.4000000000001,134);
            ctx.lineTo(707,559.4);
            ctx.closePath();
            ctx.moveTo(124,554.4);
            ctx.lineTo(701.6,554.4);
            ctx.lineTo(667.4,134.39999999999998);
            ctx.lineTo(667.4,134.39999999999998);
            ctx.bezierCurveTo(664.4,104.19999999999997,650.1,89.99999999999997,638.4,86.89999999999998);
            ctx.bezierCurveTo(538.7,60.8,414.2,61.7,413,61.7);
            ctx.bezierCurveTo(407.9,61.7,287.7,60.900000000000006,187.6,86.9);
            ctx.bezierCurveTo(176,89.9,161.4,104.2,158.79999999999998,134.4);
            ctx.lineTo(124,554.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_2;
            ctx.beginPath();
            ctx.moveTo(93.4,523.4);
            ctx.lineTo(93.4,523.4);
            ctx.bezierCurveTo(83.30000000000001,523.4,74.9,515.6999999999999,74,505.59999999999997);
            ctx.lineTo(67.1,427.5);
            ctx.bezierCurveTo(65.69999999999999,412.1,77.89999999999999,398.8,93.39999999999999,398.8);
            ctx.lineTo(93.39999999999999,398.8);
            ctx.bezierCurveTo(108.89999999999999,398.8,121,412.1,119.69999999999999,427.5);
            ctx.lineTo(112.79999999999998,505.6);
            ctx.bezierCurveTo(111.9,515.7,103.5,523.4,93.4,523.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(93.4,525.9);
            ctx.bezierCurveTo(81.9,525.9,72.5,517.3,71.5,505.79999999999995);
            ctx.lineTo(64.6,427.69999999999993);
            ctx.bezierCurveTo(63.89999999999999,419.69999999999993,66.6,411.5999999999999,72.1,405.69999999999993);
            ctx.bezierCurveTo(77.6,399.69999999999993,85.3,396.29999999999995,93.39999999999999,396.29999999999995);
            ctx.bezierCurveTo(101.49999999999999,396.29999999999995,109.19999999999999,399.69999999999993,114.69999999999999,405.69999999999993);
            ctx.bezierCurveTo(120.19999999999999,411.69999999999993,122.89999999999999,419.69999999999993,122.19999999999999,427.69999999999993);
            ctx.lineTo(115.29999999999998,505.79999999999995);
            ctx.bezierCurveTo(114.3,517.3,104.9,525.9,93.4,525.9);
            ctx.closePath();
            ctx.moveTo(93.4,401.4);
            ctx.bezierCurveTo(86.60000000000001,401.4,80.4,404.2,75.80000000000001,409.09999999999997);
            ctx.bezierCurveTo(71.20000000000002,414.09999999999997,69.00000000000001,420.59999999999997,69.60000000000001,427.29999999999995);
            ctx.lineTo(76.50000000000001,505.4);
            ctx.bezierCurveTo(77.30000000000001,514.1999999999999,84.60000000000001,520.9,93.4,520.9);
            ctx.lineTo(93.4,520.9);
            ctx.bezierCurveTo(102.30000000000001,520.9,109.5,514.1999999999999,110.30000000000001,505.4);
            ctx.lineTo(117.20000000000002,427.29999999999995);
            ctx.bezierCurveTo(117.80000000000001,420.49999999999994,115.60000000000002,414.09999999999997,111.00000000000001,409.09999999999997);
            ctx.bezierCurveTo(106.4,404.1,100.2,401.4,93.4,401.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(93.4,475.3);
            ctx.bezierCurveTo(84.7,475.3,77.5,468.2,77.5,459.40000000000003);
            ctx.bezierCurveTo(77.5,450.70000000000005,84.6,443.50000000000006,93.4,443.50000000000006);
            ctx.bezierCurveTo(102.10000000000001,443.50000000000006,109.30000000000001,450.6000000000001,109.30000000000001,459.40000000000003);
            ctx.bezierCurveTo(109.2,468.2,102.1,475.3,93.4,475.3);
            ctx.closePath();
            ctx.moveTo(93.4,448.6);
            ctx.bezierCurveTo(87.4,448.6,82.5,453.5,82.5,459.5);
            ctx.bezierCurveTo(82.5,465.5,87.4,470.4,93.4,470.4);
            ctx.bezierCurveTo(99.4,470.4,104.30000000000001,465.5,104.30000000000001,459.5);
            ctx.bezierCurveTo(104.30000000000001,453.5,99.4,448.6,93.4,448.6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(93.4,442.7);
            ctx.bezierCurveTo(83.10000000000001,442.7,74.80000000000001,434.3,74.80000000000001,424.09999999999997);
            ctx.bezierCurveTo(74.80000000000001,413.8999999999999,83.20000000000002,405.49999999999994,93.4,405.49999999999994);
            ctx.bezierCurveTo(103.6,405.49999999999994,112,413.8,112,424);
            ctx.bezierCurveTo(112,434.2,103.6,442.7,93.4,442.7);
            ctx.closePath();
            ctx.moveTo(93.4,410.4);
            ctx.bezierCurveTo(85.9,410.4,79.80000000000001,416.5,79.80000000000001,424);
            ctx.bezierCurveTo(79.80000000000001,431.5,85.9,437.6,93.4,437.6);
            ctx.bezierCurveTo(100.9,437.6,107,431.5,107,424);
            ctx.bezierCurveTo(107,416.5,100.9,410.4,93.4,410.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(123.5,697.6);
            ctx.bezierCurveTo(103,697.6,80,686.7,77.6,651.1);
            ctx.bezierCurveTo(75.19999999999999,615.5,74,600.9,74,600.9);
            ctx.bezierCurveTo(74,600.9,126.2,612.1999999999999,142.6,610.1999999999999);
            ctx.bezierCurveTo(159,608.1999999999999,172.2,609.4,172.2,609.4);
            ctx.bezierCurveTo(172.2,609.4,172.2,645,164.2,672.1999999999999);
            ctx.bezierCurveTo(157,696.6,123.5,697.6,123.5,697.6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(702.2,697.6);
            ctx.bezierCurveTo(722.7,697.6,745.7,686.7,748.1,651.1);
            ctx.bezierCurveTo(750.5,615.5,751.7,600.9,751.7,600.9);
            ctx.bezierCurveTo(751.7,600.9,699.5,612.1999999999999,683.1,610.1999999999999);
            ctx.bezierCurveTo(666.6,608.1999999999999,653.5,609.4,653.5,609.4);
            ctx.bezierCurveTo(653.5,609.4,653.5,645,661.5,672.1999999999999);
            ctx.bezierCurveTo(668.6,696.6,702.2,697.6,702.2,697.6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(296.9,474);
            ctx.lineTo(291.9,473.3);
            ctx.lineTo(302.9,391.4);
            ctx.bezierCurveTo(305.29999999999995,373.2,321.09999999999997,359.4,339.5,359.4);
            ctx.lineTo(414.4,359.4);
            ctx.lineTo(414.4,364.4);
            ctx.lineTo(339.5,364.4);
            ctx.bezierCurveTo(323.6,364.4,310,376.29999999999995,307.9,392);
            ctx.lineTo(296.9,474);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(528.8,474);
            ctx.lineTo(517.8,392.1);
            ctx.bezierCurveTo(515.6999999999999,376.3,502.09999999999997,364.5,486.19999999999993,364.5);
            ctx.lineTo(411.29999999999995,364.5);
            ctx.lineTo(411.29999999999995,359.5);
            ctx.lineTo(486.19999999999993,359.5);
            ctx.bezierCurveTo(504.5999999999999,359.5,520.3,373.2,522.8,391.5);
            ctx.lineTo(533.8,473.4);
            ctx.lineTo(528.8,474);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(487.3,383.4);
            ctx.lineTo(414.4,383.4);
            ctx.lineTo(411.2,383.4);
            ctx.lineTo(338.29999999999995,383.4);
            ctx.bezierCurveTo(334.19999999999993,383.4,331.4,387,331.4,391.09999999999997);
            ctx.lineTo(331.4,459.79999999999995);
            ctx.bezierCurveTo(331.4,463.9,334.2,467.4,338.29999999999995,467.4);
            ctx.lineTo(411.19999999999993,467.4);
            ctx.lineTo(414.3999999999999,467.4);
            ctx.lineTo(487.29999999999995,467.4);
            ctx.bezierCurveTo(491.4,467.4,494.4,463.9,494.4,459.79999999999995);
            ctx.lineTo(494.4,391.09999999999997);
            ctx.bezierCurveTo(494.4,387,491.4,383.4,487.3,383.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_1;
            ctx.beginPath();
            ctx.moveTo(557.2,108.6);
            ctx.lineTo(464.40000000000003,105.39999999999999);
            ctx.bezierCurveTo(429.70000000000005,104.19999999999999,395.1,104.19999999999999,360.40000000000003,105.39999999999999);
            ctx.lineTo(268.1,108.6);
            ctx.bezierCurveTo(235.3,108.6,208.90000000000003,135.2,208.90000000000003,168.1);
            ctx.lineTo(208.90000000000003,214.7);
            ctx.bezierCurveTo(208.90000000000003,247.5,235.40000000000003,274.2,268.3,274.2);
            ctx.lineTo(360.9,271);
            ctx.bezierCurveTo(395.5,269.8,430.2,269.8,464.9,271);
            ctx.lineTo(557.5,274.2);
            ctx.bezierCurveTo(590.3,274.2,616.9,247.6,616.9,214.7);
            ctx.lineTo(616.9,168.1);
            ctx.bezierCurveTo(616.9,135.2,590.1,108.6,557.2,108.6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(557.5,276.6);
            ctx.lineTo(464.8,273.40000000000003);
            ctx.bezierCurveTo(430.40000000000003,272.20000000000005,395.4,272.20000000000005,361,273.40000000000003);
            ctx.lineTo(268.4,276.6);
            ctx.bezierCurveTo(234.2,276.6,206.39999999999998,248.8,206.39999999999998,214.60000000000002);
            ctx.lineTo(206.39999999999998,168.00000000000003);
            ctx.bezierCurveTo(206.39999999999998,133.8,234.09999999999997,106.00000000000003,268.09999999999997,106.00000000000003);
            ctx.lineTo(360.29999999999995,102.80000000000003);
            ctx.bezierCurveTo(394.9,101.60000000000002,429.9,101.60000000000002,464.49999999999994,102.80000000000003);
            ctx.lineTo(557.3,106.00000000000003);
            ctx.bezierCurveTo(591.5999999999999,106.00000000000003,619.5,133.80000000000004,619.5,168.00000000000003);
            ctx.lineTo(619.5,214.60000000000002);
            ctx.bezierCurveTo(619.4,248.8,591.6,276.6,557.5,276.6);
            ctx.closePath();
            ctx.moveTo(412.9,267.6);
            ctx.bezierCurveTo(430.29999999999995,267.6,447.7,267.90000000000003,465,268.5);
            ctx.lineTo(557.6,271.7);
            ctx.bezierCurveTo(588.9,271.7,614.4,246.1,614.4,214.7);
            ctx.lineTo(614.4,168.1);
            ctx.bezierCurveTo(614.4,136.7,588.6999999999999,111.1,557.1999999999999,111.1);
            ctx.lineTo(557.0999999999999,111.1);
            ctx.lineTo(464.2999999999999,107.89999999999999);
            ctx.bezierCurveTo(429.7999999999999,106.69999999999999,394.89999999999986,106.69999999999999,360.4999999999999,107.89999999999999);
            ctx.lineTo(268.1999999999999,111.1);
            ctx.bezierCurveTo(236.79999999999987,111.1,211.39999999999986,136.7,211.39999999999986,168.1);
            ctx.lineTo(211.39999999999986,214.7);
            ctx.bezierCurveTo(211.39999999999986,246.1,236.89999999999986,271.7,268.29999999999984,271.7);
            ctx.lineTo(360.79999999999984,268.5);
            ctx.bezierCurveTo(378.1,267.9,395.5,267.6,412.9,267.6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_2;
            ctx.beginPath();
            ctx.moveTo(732.3,523.4);
            ctx.lineTo(732.3,523.4);
            ctx.bezierCurveTo(742.4,523.4,750.8,515.6999999999999,751.6999999999999,505.59999999999997);
            ctx.lineTo(758.5999999999999,427.5);
            ctx.bezierCurveTo(759.9999999999999,412.1,747.8,398.8,732.3,398.8);
            ctx.lineTo(732.3,398.8);
            ctx.bezierCurveTo(716.8,398.8,704.6999999999999,412.1,706,427.5);
            ctx.lineTo(712.9,505.6);
            ctx.bezierCurveTo(713.8,515.7,722.2,523.4,732.3,523.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(732.3,525.9);
            ctx.bezierCurveTo(720.8,525.9,711.4,517.3,710.4,505.79999999999995);
            ctx.lineTo(703.5,427.69999999999993);
            ctx.bezierCurveTo(702.8,419.69999999999993,705.5,411.5999999999999,711,405.69999999999993);
            ctx.bezierCurveTo(716.5,399.69999999999993,724.2,396.29999999999995,732.3,396.29999999999995);
            ctx.bezierCurveTo(740.3999999999999,396.29999999999995,748.0999999999999,399.69999999999993,753.5999999999999,405.69999999999993);
            ctx.bezierCurveTo(759.0999999999999,411.69999999999993,761.8,419.69999999999993,761.0999999999999,427.69999999999993);
            ctx.lineTo(754.1999999999999,505.79999999999995);
            ctx.bezierCurveTo(753.2,517.3,743.8,525.9,732.3,525.9);
            ctx.closePath();
            ctx.moveTo(732.3,401.4);
            ctx.bezierCurveTo(725.5,401.4,719.3,404.2,714.6999999999999,409.09999999999997);
            ctx.bezierCurveTo(710.0999999999999,414.09999999999997,707.9,420.59999999999997,708.4999999999999,427.29999999999995);
            ctx.lineTo(715.3999999999999,505.4);
            ctx.bezierCurveTo(716.1999999999998,514.1999999999999,723.4999999999999,520.9,732.2999999999998,520.9);
            ctx.bezierCurveTo(741.1999999999998,520.9,748.3999999999999,514.1999999999999,749.1999999999998,505.4);
            ctx.lineTo(756.0999999999998,427.29999999999995);
            ctx.bezierCurveTo(756.6999999999998,420.49999999999994,754.4999999999998,414.09999999999997,749.8999999999997,409.09999999999997);
            ctx.bezierCurveTo(745.3,404.1,739.1,401.4,732.3,401.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(732.3,475.3);
            ctx.bezierCurveTo(723.5999999999999,475.3,716.4,468.2,716.4,459.40000000000003);
            ctx.bezierCurveTo(716.4,450.70000000000005,723.5,443.50000000000006,732.3,443.50000000000006);
            ctx.bezierCurveTo(741.0999999999999,443.50000000000006,748.1999999999999,450.6000000000001,748.1999999999999,459.40000000000003);
            ctx.bezierCurveTo(748.1,468.2,741,475.3,732.3,475.3);
            ctx.closePath();
            ctx.moveTo(732.3,448.6);
            ctx.bezierCurveTo(726.3,448.6,721.4,453.5,721.4,459.5);
            ctx.bezierCurveTo(721.4,465.5,726.3,470.4,732.3,470.4);
            ctx.bezierCurveTo(738.3,470.4,743.1999999999999,465.5,743.1999999999999,459.5);
            ctx.bezierCurveTo(743.1999999999999,453.5,738.3,448.6,732.3,448.6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(732.3,442.7);
            ctx.bezierCurveTo(722,442.7,713.6999999999999,434.3,713.6999999999999,424.09999999999997);
            ctx.bezierCurveTo(713.6999999999999,413.8999999999999,722.0999999999999,405.49999999999994,732.3,405.49999999999994);
            ctx.bezierCurveTo(742.5,405.49999999999994,750.9,413.8999999999999,750.9,424.09999999999997);
            ctx.bezierCurveTo(750.9,434.3,742.6,442.7,732.3,442.7);
            ctx.closePath();
            ctx.moveTo(732.3,410.4);
            ctx.bezierCurveTo(724.8,410.4,718.6999999999999,416.5,718.6999999999999,424);
            ctx.bezierCurveTo(718.6999999999999,431.5,724.8,437.6,732.3,437.6);
            ctx.bezierCurveTo(739.8,437.6,745.9,431.5,745.9,424);
            ctx.bezierCurveTo(745.9,416.5,739.8,410.4,732.3,410.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.restore();
            ctx.save();
            ctx.save();
            ctx.fillStyle = "#"+$scope.sticker.color_0;
            ctx.beginPath();
            ctx.moveTo(813.5,555.1);
            ctx.lineTo(813.5,555.1);
            ctx.bezierCurveTo(799.9,543,781.4,536.2,762.1,536.2);
            ctx.lineTo(542.1,541.8000000000001);
            ctx.bezierCurveTo(454.5,544.0000000000001,366.90000000000003,544.0000000000001,279.3,541.8000000000001);
            ctx.lineTo(63.5,536.3000000000001);
            ctx.bezierCurveTo(44.2,536.3000000000001,25.700000000000003,543.1,12.100000000000001,555.2);
            ctx.lineTo(12.100000000000001,555.2);
            ctx.bezierCurveTo(-7.299999999999997,572.4000000000001,4.400000000000001,601.8000000000001,31.6,604.4000000000001);
            ctx.lineTo(31.6,604.4000000000001);
            ctx.bezierCurveTo(32.800000000000004,604.5000000000001,33.9,604.6000000000001,35.1,604.6000000000001);
            ctx.lineTo(289.1,613.3000000000002);
            ctx.bezierCurveTo(370.1,615.2000000000002,451.20000000000005,615.2000000000002,532.2,613.3000000000002);
            ctx.lineTo(790.4000000000001,604.6000000000001);
            ctx.bezierCurveTo(791.6000000000001,604.6000000000001,792.8000000000001,604.5000000000001,793.9000000000001,604.4000000000001);
            ctx.lineTo(793.9000000000001,604.4000000000001);
            ctx.bezierCurveTo(821.2,601.7,832.9,572.3,813.5,555.1);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(411.4,617.1);
            ctx.bezierCurveTo(370.5,617.1,329.7,616.6,289.09999999999997,615.7);
            ctx.lineTo(35.099999999999966,607);
            ctx.bezierCurveTo(33.89999999999996,607,32.69999999999997,606.9,31.399999999999967,606.8);
            ctx.bezierCurveTo(16.999999999999964,605.4,5.499999999999968,596.8,1.3999999999999666,584.3);
            ctx.bezierCurveTo(-2.3000000000000336,573.0999999999999,1.0999999999999666,561.5,10.399999999999967,553.1999999999999);
            ctx.bezierCurveTo(24.599999999999966,540.5999999999999,43.39999999999996,533.6999999999999,63.49999999999997,533.6999999999999);
            ctx.lineTo(279.29999999999995,539.1999999999999);
            ctx.bezierCurveTo(366.49999999999994,541.4,454.9,541.4,542,539.1999999999999);
            ctx.lineTo(762,533.5999999999999);
            ctx.bezierCurveTo(782.1,533.5999999999999,801,540.4999999999999,815.1,553.0999999999999);
            ctx.lineTo(815.1,553.0999999999999);
            ctx.bezierCurveTo(824.4,561.3,827.8000000000001,572.9999999999999,824.1,584.1999999999999);
            ctx.bezierCurveTo(820,596.6999999999999,808.6,605.3,794.1,606.6999999999999);
            ctx.bezierCurveTo(792.9,606.8,791.6,606.9,790.3000000000001,606.9);
            ctx.lineTo(532.2,615.6);
            ctx.bezierCurveTo(492.2,616.6,451.8,617.1,411.4,617.1);
            ctx.closePath();
            ctx.moveTo(63.5,538.7);
            ctx.bezierCurveTo(45,538.7,26.9,545.4000000000001,13.799999999999997,557);
            ctx.bezierCurveTo(5.999999999999997,563.9,3.1999999999999975,573.5,6.1999999999999975,582.8);
            ctx.bezierCurveTo(9.599999999999998,593.4,19.5,600.6999999999999,31.9,601.9);
            ctx.bezierCurveTo(33,602,34.1,602.1,35.199999999999996,602.1);
            ctx.lineTo(289.3,610.8000000000001);
            ctx.bezierCurveTo(369.9,612.7,451.70000000000005,612.7,532.3,610.8000000000001);
            ctx.lineTo(790.4,602.1);
            ctx.bezierCurveTo(791.6,602.1,792.6999999999999,602,793.8,601.9);
            ctx.bezierCurveTo(806.1999999999999,600.6999999999999,816.0999999999999,593.4,819.5,582.8);
            ctx.bezierCurveTo(822.5,573.5,819.7,563.9,811.9,557);
            ctx.lineTo(811.9,557);
            ctx.bezierCurveTo(798.8,545.4,780.6999999999999,538.7,762.1,538.7);
            ctx.lineTo(542.2,544.3000000000001);
            ctx.bezierCurveTo(455.00000000000006,546.5000000000001,366.50000000000006,546.5000000000001,279.20000000000005,544.3000000000001);
            ctx.lineTo(63.5,538.7);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            ctx.restore();
        };
    }

    // Download img
    $scope.downloadStickerAction = function(){
        var link = $('#downloadSticker');
        link.href = document.getElementById('drawsticker').toDataURL();
        link.download = 'sticker.png';
        Canvas2Image.saveAsPNG(canvas, 700, 332);
    }
});

// cgu controller
app.controller('cguCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-cgu';
    $rootScope.pageTitle = "MP GAZ'L | CGU";
});
