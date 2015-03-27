angular.module('7 Day Health Tracker', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})
angular.module('7Day', ['ionic'])

        .config(function ($stateProvider, $urlRouterProvider) {


            $urlRouterProvider.otherwise('/');

            $stateProvider

            .state('state1', {
                url: '/',
                templateUrl: 'index.html'
            })

            .state('state2', {
                url: '/state2',
                templateUrl: 'templates/menu.html'
            })

            .state('state3', {
                url: '/state3',
                templateUrl: 'templates/calorie.html'
            });

        })
