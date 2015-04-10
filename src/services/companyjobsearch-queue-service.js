var CareerBuilderAPIWrapper = require('../wrappers/cb-api-wrapper.js');
var kue = require('kue');
var KueWrapper = require('../wrappers/kue-wrapper.js');
var queueHelper = require('../helpers/queue-helper.js')

function CompanyJobSearchPagesQueueWorker() {
  this._companyJobSearchPagesQueue = kue.createQueue();
  this._cbAPI = new CareerBuilderAPIWrapper();
}

CompanyJobSearchPagesQueueWorker.prototype.startWorker = function() {
  var self = this;

  self._companyJobSearchPagesQueue.process('CompanyJobSearchPagesToProcess', 3, function(job, done) {
    self._cbAPI.getJobSearchResultsByPage(job.data.identifier, job.data.jobSearchPageNumber)
      .then(function(jobSearchResult) {
        return queueHelper.convertJobSearchResultsToQueueItems(jobSearchResult, job.data.identifier);
      })
      .then(function(queueItems) {
        return KueWrapper.addItemsToQueue('JobsToProcess', queueItems);
      })
      .then(function() {
        done();
      })
      .catch(function(error) {
        return done(new Error(error));
      });
  });
}

module.exports = CompanyJobSearchPagesQueueWorker;
