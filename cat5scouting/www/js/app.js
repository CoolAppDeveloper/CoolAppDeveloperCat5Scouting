angular.module('cat5scouting', ['ionic', 'cat5scouting.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
  .state('app.pit', {
    url: '/pit',
    views: {
      'menuContent': {
        templateUrl: 'templates/pit.html',
        controller: 'PitCtrl'
      }
    }
  })

  .state('app.match', {
    url: '/match',
    views: {
      'menuContent': {
        templateUrl: '/templates/match.html',
        controller: 'MatchCtrl'
      }
    }
  })
  
  .state('app.sync', {
    url: '/sync',
    views: {
      'menuContent': {
        templateUrl: '/templates/sync.html',
        controller: 'SyncCtrl'
      }
    }
  })
  
  .state('app.config', {
    url: '/config', 
    views: {
      'menuContent': {
        templateUrl: '/templates/config.html',
        controller: 'ConfigCtrl'
      }
    }
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
