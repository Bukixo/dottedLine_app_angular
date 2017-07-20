angular
.module('dl_app')
.factory('Game', Game);

Game.$inject = ['$resource'];
// function Game($resource){
//   return  new $resource('/api/games/:id', { id: '@id' }, {
//     update: { method: 'PUT' }
//   });
// }


function Game($resource){
  const Game = $resource('/api/games/:id',
    { id: '@_id' },
    {
      'update': { method: 'PUT' }
    }
  );

  Object.defineProperty(Game.prototype, 'gameHome', {
    get: function(){
      return this.home.name;
    }
  });

  return Game;
}
