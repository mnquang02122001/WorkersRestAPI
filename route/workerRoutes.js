// create App function
module.exports = function (app) {
  var workersController = require('../controller/workerController');
  // worker Routes

  // get and post request for /todos endpoints
  app
    .route('/workers')
    .get(workersController.listAllWorkers)
    .post(workersController.createNewWorker);

  // put and delete request for /todos endpoints
  app
    .route('/worker/:id')
    .get(workersController.getWorker)
    .put(workersController.updateWorker)
    .delete(workersController.deleteWorker);
};
