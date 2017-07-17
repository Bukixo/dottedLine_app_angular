// app.js is the main JS file which you should define your Angular module
angular
  .module('dl_app')
  .controller('PlayersCtrl', PlayersCtrl);

PlayersCtrl.$inject = ['$http', '$stateParams'];
function PlayersCtrl($http, $stateParams){
  const vm = this;
  vm.all = [];
  vm.newPlayer = {};
  vm.playersShow = playersShow;

  playerIndex();

  function playerIndex() {
    $http.get('/api/players')
    .then((response) => {
      vm.all = response.data;
    });
  }

  function playersShow(){
    return vm.players[$stateParams.id];
  }

  vm.playersCreate = playersCreate;

  function playersCreate(){
    $http
      .post('http://localhost:3000/players', vm.newPlayer)
      .then(response => {
        vm.all.push(response.data);
        vm.newPlayer = {};
      });

  }

  vm.playersDelete = playersDelete;

  function playersDelete(player){
    $http
      .delete(`http://localhost:3000/players/${player.id}`)
      .then(() => {
        const index = vm.all.indexOf(player);
        vm.all.splice(index, 1);
      });
  }



} /// end of http playerctrl function
