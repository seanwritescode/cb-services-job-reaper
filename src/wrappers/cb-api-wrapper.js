var rest = require('restler');
var Q = require('q');
var Config = require('config');

var JOB_SEARCH_URL = "https://api.careerbuilder.com/v1/jobsearch?DeveloperKey={0}&TalentNetworkDID={1}&outputjson=true&PerPage={2}&PageNumber={3}&SearchAllCountries=True&SiteEntity=talentnetworkjob";
var JOB_DETAILS_URL = "http://api.careerbuilder.com/v1/job/?DeveloperKey={0}&did={1}&outputjson=true";

function CareerBuilderAPIWrapper() {
  this.devKey = Config.get('CBAPI.devKey');
}

CareerBuilderAPIWrapper.prototype.getTotalJobResultPagesForCompany = function(DID) {
  var self = this;
  var deferred = Q.defer();
  var serviceURL = formatString(JOB_SEARCH_URL, self.devKey, DID, 100, 1);

  rest.get(serviceURL)
    .on('success', function(data, response) {
      if(data.hasOwnProperty('Errors') && data.Errors.hasOwnProperty('Error')) {
        deferred.reject(data.Errors.Error);
      }
      else if(data.hasOwnProperty('ResponseJobSearch') && data.ResponseJobSearch.hasOwnProperty('TotalPages')) {
        deferred.resolve(data.ResponseJobSearch.TotalPages);
      }
      else {
        deferred.reject('Failed with unknown error.');
      }
    })
    .on('fail', function(data, response) {
      deferred.reject(data);
    })
    .on('error', function(err, response) {
      deferred.reject(err);
    });

    return deferred.promise;
}

CareerBuilderAPIWrapper.prototype.getJobSearchResultsByPage = function(DID, page) {
  var self = this;
  var deferred = Q.defer();
  var serviceURL = formatString(JOB_SEARCH_URL, self.devKey, DID, 100, page);

  rest.get(serviceURL)
    .on('success', function(data, response) {
      if(data.hasOwnProperty('Errors') && data.Errors.hasOwnProperty('Error')) {
        deferred.reject(data.Errors.Error);
      }
      else if(data.hasOwnProperty('ResponseJobSearch') && data.ResponseJobSearch.hasOwnProperty('Results') && data.ResponseJobSearch.Results.hasOwnProperty('JobSearchResult')) {
        deferred.resolve(data.ResponseJobSearch.Results.JobSearchResult);
      }
      else {
        deferred.reject('Failed with unknown error.');
      }
    })
    .on('fail', function(data, response) {
      deferred.reject(data);
    })
    .on('error', function(err, response) {
      deferred.reject(err);
    });

    return deferred.promise;
}

CareerBuilderAPIWrapper.prototype.foo = function(identifier) {
  var self = this;
  var deferred = Q.defer();
  var serviceURL = formatString(JOB_DETAILS_URL, self.devKey, identifier);

  rest.get(serviceURL)
    .on('success', function(data, response) {
      if(data.hasOwnProperty('ResponseJob')) {
        var job = data.ResponseJob;
      }
      else {
        deferred.reject('The API call returned an invalid object');
      }

      if(job.hasOwnProperty('Errors') && job.Errors != null) {
        deferred.reject(job.Errors);
      }
      else if(job.hasOwnProperty('Job')) {
        deferred.resolve(job.Job);
      }
      else {
        deferred.reject('Failed with unknown error.');
      }
    })
    .on('fail', function(data, response) {
      deferred.reject(data);
    })
    .on('error', function(err, response) {
      deferred.reject(data);
    });

    return deferred.promise;
}

CareerBuilderAPIWrapper.prototype.getJobDetails = function(identifier, callback) {
  var self = this;
  var serviceURL = formatString(JOB_DETAILS_URL, self.devKey, identifier);

  rest.get(serviceURL).on('complete', function(result) {

    if(result) {
      if(result instanceof Error) {
        callback(result, null);
      }
    }
    else {
      callback("API call failed", null);
    }

    if((hasProp(result), 'ResponseJob') && hasProp(result.ResponseJob, 'Job')) {
      callback(null, result.ResponseJob.Job);
    }
    else if((hasProp(result), 'ResponseJob') && hasProp(result, 'Errors') && hasProp(result, 'Error')) {
      callback(result.ResponseJob.Errors.Error);
    }
    else {
      console.log(result);
      callback("Job not found.", null);
    }

    callback(null, result.ResponseJob.Job);
  });
};

function formatString(str)
{
  for(i = 1; i < arguments.length; i++)
  {
    str = str.replace('{' + (i - 1) + '}', arguments[i]);
  }

  return str;
}

function hasProp(obj, prop)
{
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = CareerBuilderAPIWrapper;
