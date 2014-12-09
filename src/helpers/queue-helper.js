var async = require('async');
var Q = require('q');

module.exports.convertCompaniesToQueueItems = function(companies) {
  var promises = companies.map(function(company) {
    var deferred = Q.defer();

    try {
      var item = { title: company.Name, identifier: company.DID };
      deferred.resolve(item);
    }
    catch(ex) {
      deferred.reject(ex);
    }

    return deferred.promise;
  });

  return Q.all(promises);
}

module.exports.convertTotalPagesToQueueItems = function(CompanyDID, totalPages) {
  var deferred = Q.defer();
  var itemArray = new Array();

  for(var i = 1; i <= totalPages; i++) {
    var item = { title: CompanyDID + " " + i, identifier: CompanyDID, jobSearchPageNumber: i };
    itemArray.push(item);
  }

  deferred.resolve(itemArray);

  return deferred.promise;
}

module.exports.convertJobSearchResultsToQueueItems = function(jobSearchResults, groupIdentifier) {
  var promises = jobSearchResults.map(function(jobSearchResult) {
    var deferred = Q.defer();

    try {
      var item = { title: jobSearchResult.JobTitle,
        AccountDID: jobSearchResult.AccountDID,
        Company: jobSearchResult.Company,
        CompanyDID: jobSearchResult.CompanyDID,
        CompanyDetailsURL: jobSearchResult.CompanyDetailsURL,
        DID: jobSearchResult.DID,
        OnetCode: jobSearchResult.OnetCode,
        ONetFriendlyTitle: jobSearchResult.ONetFriendlyTitle,
        DescriptionTeaser: jobSearchResult.DescriptionTeaser,
        EmploymentType: jobSearchResult.EmploymentType,
        EducationRequired: jobSearchResult.EducationRequired,
        JobDetailsURL: jobSearchResult.JobDetailsURL,
        GroupIdentifier: groupIdentifier,
        JobServiceURL: jobSearchResult.JobServiceURL,
        Location: jobSearchResult.Location,
        DisplayCity: jobSearchResult.DisplayCity,
        City: jobSearchResult.City,
        State: jobSearchResult.State,
        LocationLatitude: jobSearchResult.LocationLatitude,
        LocationLongitude: jobSearchResult.LocationLongitude,
        PostedDate: jobSearchResult.PostedDate,
        PostedTime: jobSearchResult.PostedTime,
        Pay: jobSearchResult.Pay,
        SimilarJobsURL: jobSearchResult.SimilarJobsURL,
        JobTitle: jobSearchResult.JobTitle,
        CompanyImageURL: jobSearchResult.CompanyImageURL,
        JobBrandingIcons: jobSearchResult.JobBrandingIcons,
        ApplyRequirements: jobSearchResult.ApplyRequirements,
        HostSite: jobSearchResult.HostSite,
        Skills: jobSearchResult.skills };

      deferred.resolve(item);
    }
    catch(ex) {
      deferred.reject(ex);
    }

    return deferred.promise;
  });

  return Q.all(promises);
}
