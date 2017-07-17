// app.js is the main JS file which you should define your Angular module
angular
  .module('dl_app')
  .controller('GamesIndexCtrl', GamesIndexCtrl);

GamesIndexCtrl.$inject = ['Game'];
function GamesIndexCtrl(Game){
  const vm = this;

  vm.all = Game.query();
}
