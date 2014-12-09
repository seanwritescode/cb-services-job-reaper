var kue = require('kue');
var Q = require('q');

module.exports.addItemsToQueue = function(queueName, itemsToAdd, attempts) {
  var self = this;
  var queue = kue.createQueue();

  var promises = itemsToAdd.map(function(itemToAdd){
      var deferred = Q.defer();

      try {
        queue.create(queueName, itemToAdd).attempts(attempts).save();
        deferred.resolve();
      }
      catch(err) {
        deferred.reject(err);
      }

      return deferred.promise;
  });

  return Q.all(promises);
}
