angular
  .module('dl_app')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('playersIndex', {
      url: '/',
      templateUrl: '/js/views/home.html',
      controller: 'PlayersIndexCtrl as playersIndex'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/js/views/about.html'
    })
    .state('playersShow', {
      url: '/players/:id',
      templateUrl: '/js/views/show.html',
      controller: 'PlayersShowCtrl as playersShow'
    })
    .state('playersEdit', {
      url: '/players/:id/edit',
      templateUrl: '/js/views/edit.html',
      controller: 'PlayersEditCtrl as playersEdit'
    })
    .state('playersNew', {
      url: '/players/new',
      templateUrl: '/js/views/new.html',
      controller: 'PlayersNewCtrl as playersNew'
    });



  $urlRouterProvider.otherwise('/');
}
