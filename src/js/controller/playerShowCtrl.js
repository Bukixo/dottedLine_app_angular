// // app.js is the main JS file which you should define your Angular module
// angular
//   .module('dl_app')
//   .controller('PlayersShowCtrl', PlayersShowCtrl);
//
// PlayersShowCtrl.$inject = ['$http', '$stateParams'];
// function PlayersShowCtrl($http, $stateParams){
//   const vm = this;
//   vm.all = [];
//   vm.newPlayer = {};
//
//   playerIndex();
//
//   function playerIndex() {
//     $http.get('http://localhost:3000/players')
//     .then((response) => {
//       vm.all = response.data;
//     });
//   }
//
//   vm.playerShow = playerShow;
//   function playerShow(){
//     return vm.player[$stateParams.id];
//   }
//
//
// } /// end of http playerctrl function
