angular
  .module('dl_app')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/js/views/about.html'
    })
    .state('show', {
      url: '/players/:id',
      templateUrl: '/js/views/show.html'
    });

  $urlRouterProvider.otherwise('/');
}
