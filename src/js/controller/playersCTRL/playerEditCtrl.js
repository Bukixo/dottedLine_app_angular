// app.js is the main JS file which you should define your Angular module
angular
  .module('dl_app')
  .controller('PlayersEditCtrl', PlayersEditCtrl);

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
