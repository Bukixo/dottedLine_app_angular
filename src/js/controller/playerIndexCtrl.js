// app.js is the main JS file which you should define your Angular module
angular
  .module('dl_app')
  .controller('PlayersIndexCtrl', PlayersIndexCtrl)
  .controller('PlayersShowCtrl', PlayersShowCtrl)
  .controller('PlayersNewCtrl', PlayersNewCtrl)
  .controller('PlayersEditCtrl', PlayersEditCtrl);


PlayersIndexCtrl.$inject = ['Player'];
function PlayersIndexCtrl(Player){
  const vm = this;

  vm.all = Player.query();
}
  //////////////////////////////////////////////////////////////////

PlayersNewCtrl.$inject = ['Player', '$state'];
function PlayersNewCtrl(Player, $state) {
  const vm = this;
  vm.player = {};

  function playersCreate() {
    Player
      .save(vm.player)
      .$promise
      .then(() => $state.go('playersIndex'));
  }
  vm.create = playersCreate;
}

  //////////////////////////////////////////////////////////////////////////

PlayersShowCtrl.$inject =['Player', '$stateParams', '$state'];
function PlayersShowCtrl(Player, $stateParams, $state) {
  const vm = this;
  vm.player = {};
  vm.player = Player.get($stateParams);

  function deletePlayer() {
    vm.player
      .$remove()
      .then(() => $state.go('playersIndex'));
  }

  vm.delete = deletePlayer;

}

  ///////////////////////////////////////////////////////////////////////////

PlayersEditCtrl.$inject = ['Player', '$stateParams', '$state'];
function PlayersEditCtrl(Player, $stateParams, $state) {
  const vm = this;

  vm.player = Player.get($stateParams);

  function playersUpdate() {
    vm.player
      .$update()
      .then(() => $state.go('playersShow', $stateParams));
  }
  vm.update = playersUpdate;
}








// PlayersCtrl.$inject = ['$http', '$stateParams'];
// function PlayersCtrl($http, $stateParams){
//   const vm = this;
//   vm.all = [];
//   vm.newPlayer = {};
//   vm.playersShow = playersShow;
//
//   playerIndex();
//
//   function playerIndex() {
//     $http.get('/api/players')
//     .then((response) => {
//       vm.all = response.data;
//     });
//   }
// ////////////////////////////////////////////////////
//
//   function playersShow(){
//     return vm.players[$stateParams.id];
//   }
//
// ///////////////////////////////////////////////////////////
//   vm.playersCreate = playersCreate;
//
//   function playersCreate(){
//     $http
//       .post('http://localhost:3000/players', vm.newPlayer)
//       .then(response => {
//         vm.all.push(response.data);
//         vm.newPlayer = {};
//       });
//
//   }
// ///////////////////////////////////////////////////////////////////
//   vm.playersDelete = playersDelete;
//
//   function playersDelete(player){
//     $http
//       .delete(`http://localhost:3000/players/${player.id}`)
//       .then(() => {
//         const index = vm.all.indexOf(player);
//         vm.all.splice(index, 1);
//       });
//   }
//
//
//
// } /// end of http playerctrl function
