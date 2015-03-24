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

      .config(function($stateProvider, $urlRouterProvider) {

        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider

        .state('index', {
          url: '/',
          templateUrl: 'index.html'
        })

        .state('Calories', {
          url: '/Calories',
          templateUrl: 'Calories.html'
        });

      })

