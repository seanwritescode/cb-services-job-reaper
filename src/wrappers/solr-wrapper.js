var rest = require('restler');
var Q = require('q');
var Config = require('config');

function SOLRWrapper() {
  this.connectionString = Config.get('SOLR.connectionString');
}

SOLRWrapper.prototype.executeDocumentReload = function(targetCore) {
  var self = this;
  var deferred = Q.defer();
  var serviceURL = this.connectionString + "/" + targetCore + "/dataimport?command=full-import&entity=active_jobs";

  //Once the logging layer is connected we'll log the end of the queue process and deal with any errors
  //that may arise from reloading the SOLR core
  rest.get(serviceURL)
    .on('success', function(data, response) {
      deferred.resolve(true);
    })
    .on('fail', function(data, response) {
      deferred.reject(data);
    })
    .on('error', function(err, response) {
      deferred.reject(err);
    });

    return deferred.promise;
}
