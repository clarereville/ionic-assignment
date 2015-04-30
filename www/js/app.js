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

	
angular.module('bmi', ['ionic'])
.controller('BmiCrtl', function($scope) {
  $scope.BMI = 0;
  $scope.Cals = 0;
});	  


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
                templateUrl: 'templates/gender.html'
            })
			.state('state4', {
                url: '/state4',
                templateUrl: 'templates/counter.html'
            })
			.state('state5', {
                url: '/state5',
                templateUrl: 'templates/tracker.html'
            })
			.state('state6', {
                url: '/state6',
                templateUrl: 'templates/foods.html'
            })
			.state('state7', {
                url: '/state7',
                templateUrl: 'templates/eatingtips.html'
            })
            .state('state8', {
                url: '/state8',
                templateUrl: 'templates/exercise.html'
            })
			 .state('state9', {
                url: '/state9',
                templateUrl: 'templates/kids.html'
            })
			.state('state10', {
                url: '/state10',
                templateUrl: 'templates/calorie.html'
            })
			.state('state11', {
                url: '/state11',
                templateUrl: 'templates/caloriemen.html'
            });

        });
	
 
	  
 

