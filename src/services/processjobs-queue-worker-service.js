var CareerBuilderAPIWrapper = require('../wrappers/cb-api-wrapper.js');
var kue = require('kue');
var KueWrapper = require('../wrappers/kue-wrapper.js');
var queueHelper = require('../helpers/queue-helper.js')
var jobHelper = require('../helpers/job-model-helper.js');
var models = require('../models');

function ProcessJobsQueueWorker() {
  this._jobsQueue = kue.createQueue();
  this._cbAPI = new CareerBuilderAPIWrapper();
}

ProcessJobsQueueWorker.prototype.startWorker = function() {
  var self = this;

  self._jobsQueue.process('JobsToProcess', 1, function(job, done) {
    self._cbAPI.foo(job.data.DID)
    .then(function(responseJob) {
      var Job = models.job;
      var jobObject = jobHelper.buildJobModel(job.data, responseJob);
      Job.upsert(jobObject)
        .catch(function(ex) {
          console.log(ex);
          return done(new Error(ex));
        });
    })
    .then(function() {
      done();
    })
    .catch(function(ex) {
      console.log(ex);
      return done(new Error(ex));
    });
  });
}

module.exports = ProcessJobsQueueWorker;
