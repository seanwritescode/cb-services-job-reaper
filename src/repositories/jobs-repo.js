var models = require('../models');

function JobsRepo(sqlConnectionString) {
  this.databaseConnectionString = sqlConnectionString;
}

JobsRepo.prototype.insertJob = function(queueItem, jobToInsert, callback) {
  var Job = models.job;

  Job.create({
          DID : jobToInsert.DID,
          AccountDID : queueItem.data.AccountDID,
          ApplyURL : jobToInsert.ApplyURL,
          BeginDate : jobToInsert.BeginDate,
          Categories : jobToInsert.Categories,
          CategoriesCodes : jobToInsert.CategoriesCodes,
          ContactInfoFax : jobToInsert.ContactInfoFax,
          ContactInfoName : jobToInsert.ContactInfoName,
          ContactInfoPhone : jobToInsert.ContactInfoPhone,
          ContactInfoEmailURL : jobToInsert.ContactInfoEmailURL,
          CustomApplyTag : jobToInsert.CustomApplyTag,
          CustomApplyType : jobToInsert.CustomApplyType,
          CompanyDID : jobToInsert.CompanyDID,
          CompanyImageURL : jobToInsert.CompanyImageURL,
          CompanyDetailsURL : jobToInsert.CompanyDetailsURL,
          DisplayJobID : jobToInsert.DisplayJobID,
          DegreeRequired : jobToInsert.DegreeRequired,
          DegreeRequiredCode : jobToInsert.DegreeRequiredCode,
          DescriptionTeaser : queueItem.data.DescriptionTeaser,
          Description : jobToInsert.JobDescription,
          EmploymentType : jobToInsert.EmploymentType,
          EmploymentTypeCode : jobToInsert.EmploymentTypeCode,
          ExperienceRequired : jobToInsert.ExperienceRequired,
          EndDate : jobToInsert.EndDate,
          ExternalApplication : jobToInsert.ExternalApplication,
          HostSite : jobToInsert.HostSite,
          IsExpired : jobToInsert.IsExpired,
          IndustryCodes : jobToInsert.IndustryCodes,
          JobTitle : jobToInsert.JobTitle,
          JobDetailsURL : queueItem.data.JobDetailsURL,
          JobModifiedDate : jobToInsert.JobModifiedDate,
          JobServiceURL : queueItem.data.JobServiceURL,
           Latitude : jobToInsert.LocationLatitude,
           Location : queueItem.data.Location,
          LocationCity : jobToInsert.LocationCity,
          LocationCountry : jobToInsert.LocationCountry,
          LocationFormatted : jobToInsert.LocationFormatted,
          LocationMetroCity : jobToInsert.LocationMetroCity,
          LocationPostalCode : jobToInsert.LocationPostalCode,
          LocationState : jobToInsert.LocationState,
          LocationStreet1 : jobToInsert.LocationStreet1,
          LocationStreet2 : jobToInsert.LocationStreet2,
           Longitude : jobToInsert.LocationLongitude,
          MaxExperience : jobToInsert.MaxExperience,
          MinExperience : jobToInsert.MinExperience,
          ONetCode : queueItem.data.ONetCode,
          ONetFriendlyTitle : queueItem.data.ONetFriendlyTitle,
          Pay : queueItem.data.Pay,
          PostedDate : queueItem.data.PostedDate,
          Requirements : jobToInsert.JobRequirements,
          RelocationCovered : jobToInsert.RelocationCovered,
          RelocationOptions : jobToInsert.RelocationOptions,
          SimilarJobsURL : queueItem.data.SimilarJobsURL,
          ShowFax : jobToInsert.ShowFax,
          ShowName : jobToInsert.ShowName,
          ShowPhone : jobToInsert.ShowPhone,
          TNDID : queueItem.data.TNDID,
          TravelRequired : jobToInsert.TravelRequired,
          TravelRequiredCode : jobToInsert.TravelRequiredCode
  }).success(function(createdJob){
    callback(null);
  }).error(function(error) {
    callback(error);
  });
}
// JobsRepo.prototype.insertOrUpdateJobFromQueue = function(queueItem, jobToInsert, callback) {
//   var Job = models.job;
//
//   Job.findOrCreate({
//     where : {
//       DID : jobToInsert.DID
//     },
//     defaults : {
//        DID : jobToInsert.DID,
//        AccountDID : queueItem.data.AccountDID,
//       // ApplyURL : jobToInsert.ApplyURL,
//       // BeginDate : jobToInsert.BeginDate,
//       // Categories : jobToInsert.Categories,
//       // CategoriesCodes : jobToInsert.CategoriesCodes,
//       // ContactInfoFax : jobToInsert.ContactInfoFax,
//       // ContactInfoName : jobToInsert.ContactInfoName,
//       // ContactInfoPhone : jobToInsert.ContactInfoPhone,
//       // ContactInfoEmailURL : jobToInsert.ContactInfoEmailURL,
//       // CustomApplyTag : jobToInsert.CustomApplyTag,
//       // CustomApplyType : jobToInsert.CustomApplyType,
//       // CompanyDID : jobToInsert.CompanyDID,
//       // CompanyImageURL : jobToInsert.CompanyImageURL,
//       // CompanyDetailsURL : jobToInsert.CompanyDetailsURL,
//       // DisplayJobID : jobToInsert.DisplayJobID,
//       // DegreeRequired : jobToInsert.DegreeRequired,
//       // DegreeRequiredCode : jobToInsert.DegreeRequiredCode,
//       // DescriptionTeaser : queueItem.data.DescriptionTeaser,
//        Description : jobToInsert.JobDescription,
//       // EmploymentType : jobToInsert.EmploymentType,
//       // EmploymentTypeCode : jobToInsert.EmploymentTypeCode,
//       // ExperienceRequired : jobToInsert.ExperienceRequired,
//       // EndDate : jobToInsert.EndDate,
//       // ExternalApplication : jobToInsert.ExternalApplication,
//       // HostSite : jobToInsert.HostSite,
//       // IsExpired : jobToInsert.IsExpired,
//       // IndustryCodes : jobToInsert.IndustryCodes,
//        JobTitle : jobToInsert.JobTitle,
//       // JobDetailsURL : queueItem.data.JobDetailsURL,
//       // JobModifiedDate : jobToInsert.JobModifiedDate,
//       // JobServiceURL : queueItem.data.JobServiceURL,
//        Latitude : jobToInsert.LocationLatitude,
//        Location : queueItem.data.Location,
//       // LocationCity : jobToInsert.LocationCity,
//       // LocationCountry : jobToInsert.LocationCountry,
//       // LocationFormatted : jobToInsert.LocationFormatted,
//       // LocationMetroCity : jobToInsert.LocationMetroCity,
//       // LocationPostalCode : jobToInsert.LocationPostalCode,
//       // LocationState : jobToInsert.LocationState,
//       // LocationStreet1 : jobToInsert.LocationStreet1,
//       // LocationStreet2 : jobToInsert.LocationStreet2,
//        Longitude : jobToInsert.LocationLongitude,
//       // MaxExperience : jobToInsert.MaxExperience,
//       // MinExperience : jobToInsert.MinExperience,
//       // ONetCode : queueItem.data.ONetCode,
//       // ONetFriendlyTitle : queueItem.data.ONetFriendlyTitle,
//       // Pay : queueItem.data.Pay,
//       // PostedDate : queueItem.data.PostedDate,
//       // Requirements : jobToInsert.JobRequirements,
//       // RelocationCovered : jobToInsert.RelocationCovered,
//       // RelocationOptions : jobToInsert.RelocationOptions,
//       // SimilarJobsURL : queueItem.data.SimilarJobsURL,
//       // ShowFax : jobToInsert.ShowFax,
//       // ShowName : jobToInsert.ShowName,
//       // ShowPhone : jobToInsert.ShowPhone,
//       // TNDID : queueItem.data.TNDID,
//       // TravelRequired : jobToInsert.TravelRequired,
//       // TravelRequiredCode : jobToInsert.TravelRequiredCode
//     }
//   }).success(function(createdJob, created){
//     if(created) {
//       callback(null);
//     }
//     else {
//       createdJob.updateAttributes({
//          DID : jobToInsert.DID,
//          AccountDID : queueItem.data.AccountDID,
//         // ApplyURL : jobToInsert.ApplyURL,
//         // BeginDate : jobToInsert.BeginDate,
//         // Categories : jobToInsert.Categories,
//         // CategoriesCodes : jobToInsert.CategoriesCodes,
//         // ContactInfoFax : jobToInsert.ContactInfoFax,
//         // ContactInfoName : jobToInsert.ContactInfoName,
//         // ContactInfoPhone : jobToInsert.ContactInfoPhone,
//         // ContactInfoEmailURL : jobToInsert.ContactInfoEmailURL,
//         // CustomApplyTag : jobToInsert.CustomApplyTag,
//         // CustomApplyType : jobToInsert.CustomApplyType,
//         // CompanyDID : jobToInsert.CompanyDID,
//         // CompanyImageURL : jobToInsert.CompanyImageURL,
//         // CompanyDetailsURL : jobToInsert.CompanyDetailsURL,
//         // DisplayJobID : jobToInsert.DisplayJobID,
//         // DegreeRequired : jobToInsert.DegreeRequired,
//         // DegreeRequiredCode : jobToInsert.DegreeRequiredCode,
//         // DescriptionTeaser : queueItem.data.DescriptionTeaser,
//          Description : jobToInsert.JobDescription,
//         // EmploymentType : jobToInsert.EmploymentType,
//         // EmploymentTypeCode : jobToInsert.EmploymentTypeCode,
//         // ExperienceRequired : jobToInsert.ExperienceRequired,
//         // EndDate : jobToInsert.EndDate,
//         // ExternalApplication : jobToInsert.ExternalApplication,
//         // HostSite : jobToInsert.HostSite,
//         // IsExpired : jobToInsert.IsExpired,
//         // IndustryCodes : jobToInsert.IndustryCodes,
//          JobTitle : jobToInsert.JobTitle,
//         // JobDetailsURL : queueItem.data.JobDetailsURL,
//         // JobModifiedDate : jobToInsert.JobModifiedDate,
//         // JobServiceURL : queueItem.data.JobServiceURL,
//          Latitude : jobToInsert.LocationLatitude,
//          Location : queueItem.data.Location,
//         // LocationCity : jobToInsert.LocationCity,
//         // LocationCountry : jobToInsert.LocationCountry,
//         // LocationFormatted : jobToInsert.LocationFormatted,
//         // LocationMetroCity : jobToInsert.LocationMetroCity,
//         // LocationPostalCode : jobToInsert.LocationPostalCode,
//         // LocationState : jobToInsert.LocationState,
//         // LocationStreet1 : jobToInsert.LocationStreet1,
//         // LocationStreet2 : jobToInsert.LocationStreet2,
//          Longitude : jobToInsert.LocationLongitude,
//         // MaxExperience : jobToInsert.MaxExperience,
//         // MinExperience : jobToInsert.MinExperience,
//         // ONetCode : queueItem.data.ONetCode,
//         // ONetFriendlyTitle : queueItem.data.ONetFriendlyTitle,
//         // Pay : queueItem.data.Pay,
//         // PostedDate : queueItem.data.PostedDate,
//         // Requirements : jobToInsert.JobRequirements,
//         // RelocationCovered : jobToInsert.RelocationCovered,
//         // RelocationOptions : jobToInsert.RelocationOptions,
//         // SimilarJobsURL : queueItem.data.SimilarJobsURL,
//         // ShowFax : jobToInsert.ShowFax,
//         // ShowName : jobToInsert.ShowName,
//         // ShowPhone : jobToInsert.ShowPhone,
//         // TNDID : queueItem.data.TNDID,
//         // TravelRequired : jobToInsert.TravelRequired,
//         // TravelRequiredCode : jobToInsert.TravelRequiredCode
//       }).success(callback(null)).error(function(error){ callback(error); });
//     }
//   }).error(function(error){
//     console.log(jobToInsert.DID + "\n" + queueItem.data.AccountDID + "\n" + jobToInsert.JobDescription + "\n" + jobToInsert.JobTitle + "\n" + jobToInsert.LocationLatitude + "\n" + queueItem.data.Location + "\n" + jobToInsert.LocationLongitude + "\n");
//     //console.log(error.lineNumber);
//     //console.log(error.stack)
//     callback(error);
//   });
// }

module.exports = JobsRepo;
