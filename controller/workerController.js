// import Worker Model
const Worker = require('../model/Worker');

// DEFINE CONTROLLER FUNCTIONS

// listAllWorkers function - To list all workers
exports.listAllWorkers = (req, res) => {
  Worker.find({}, (err, workers) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(workers);
  });
};

// createNewWorker function - To create new worker
exports.createNewWorker = (req, res) => {
  console.log(req.body);
  let newWorker = new Worker(req.body);
  //console.log(newWorker);
  newWorker.save((err, worker) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(worker);
  });
};
// getWorker function = To get a worker by id
exports.getWorker = (req, res) => {
  Worker.findById(req.params.id, (err, worker) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(worker);
  });
};

// updateWorker function - To update worker by id
exports.updateWorker = (req, res) => {
  Worker.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, worker) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(worker);
    }
  );
};

// deleteWorker function - To delete worker by id
exports.deleteWorker = async (req, res) => {
  console.log(req.params.id);
  Worker.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(404).send(err);
    }
    res.status(200).json({ message: 'Successful' });
  });
};
