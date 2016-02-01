// CONTROLLERS ============================================
// main controller
app.controller('mainCtrl', function($scope, $location) {
    // Active link menu
    $scope.$on('$routeChangeStart', function(next, current) { 
        $scope.currentUrl = $location.path();
    });
});

// home page controller
app.controller('homeCtrl', function($scope, $rootScope) {
    $rootScope.bodyClass = 'page-home';
    $rootScope.pageTitle = '4L Front';
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
