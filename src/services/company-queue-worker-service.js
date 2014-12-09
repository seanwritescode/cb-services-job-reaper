var CareerBuilderAPIWrapper = require('../wrappers/cb-api-wrapper.js');
var kue = require('kue');
var KueWrapper = require('../wrappers/kue-wrapper.js');
var queueHelper = require('../helpers/queue-helper.js');

function CompanyQueueWorker() {
  this._companyQueue = kue.createQueue();
  this._cbAPI = new CareerBuilderAPIWrapper();
}

CompanyQueueWorker.prototype.startWorker = function() {
  var self = this;

  self._companyQueue.process('CompaniesToProcess', 5, function(job, done){
    self._cbAPI.getTotalJobResultPagesForCompany(job.data.identifier)
      .then(function(totalNumberOfPages) {
        return queueHelper.convertTotalPagesToQueueItems(job.data.identifier, totalNumberOfPages);
      })
      .then(function(companyJobSearchPageQueueItems) {
        return KueWrapper.addItemsToQueue('CompanyJobSearchPagesToProcess', companyJobSearchPageQueueItems, 5);
      })
      .then(function() {
        done();
      })
      .catch(function(error) {
        console.log(error);
      });
  })
}

module.exports = CompanyQueueWorker;
