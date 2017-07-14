const router = require('express'). Router();

const playersController = require('../controllers/player');

router.route('/players')
  .get(playersController.index)
  .post(playersController.create);

router.route('/players/:id')
  .get(playersController.show)
  .put(playersController.update)
  .delete(playersController.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
