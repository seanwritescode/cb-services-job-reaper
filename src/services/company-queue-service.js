var kue = require('kue');
var KueWrapper = require('../wrappers/kue-wrapper.js');
var async = require('async');
var queueHelper = require('../helpers/queue-helper.js');

function CompanyQueueService(companyRepo, companyQueue) {
  this._companyRepo = companyRepo;
  this._companyQueue = companyQueue;
}

CompanyQueueService.prototype.FillQueue = function() {
  var self = this;

  self._companyRepo.getActiveCompanies()
    .then(function(activeCompanies){
      return queueHelper.convertCompaniesToQueueItems(activeCompanies);
    })
    .then(function(companyQueueItems) {
      return KueWrapper.addItemsToQueue('CompaniesToProcess', companyQueueItems);
    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports = CompanyQueueService;
