var models = require('../models');
var Q = require('q');

function CompanyRepo() { }

CompanyRepo.prototype.getActiveCompanies = function() {
  var deferred = Q.defer();
  var company = models.company;

  company.findAll({ where: {Active: true} })
    .then(function(searchResults) {
      deferred.resolve(searchResults);
    })

    .catch(function(err) {
      deferred.reject(err);
    });

  return deferred.promise;
}

module.exports = CompanyRepo;
