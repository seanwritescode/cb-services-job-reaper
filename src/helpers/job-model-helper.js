module.exports.buildJobModel = function(jobSearchResult, jobDetailsResult) {
  return {
    DID: jobSearchResult.DID,
    AccountDID: jobSearchResult.AccountDID,
    ApplyURL: jobDetailsResult.ApplyURL,
    BeginDate: jobDetailsResult.BeginDate,
    Categories: jobDetailsResult.Categories,
    CategoriesCodes: jobDetailsResult.CategoriesCodes,
    ContactInfoFax: jobDetailsResult.ContactInfoFax,
    ContactInfoName: jobDetailsResult.ContactInfoName,
    ContactInfoPhone: jobDetailsResult.ContactInfoPhone,
    ContactInfoEmailURL: jobDetailsResult.ContactInfoEmailURL,
    CustomApplyType: jobDetailsResult.CustomApplyType,
    CompanyDID: jobDetailsResult.CompanyDID,
    CompanyImageURL: jobDetailsResult.CompanyImageURL,
    CompanyDetailsURL: jobDetailsResult.CompanyDetailsURL,
    DisplayJobID: jobDetailsResult.DisplayJobID,
    DegreeRequired: jobDetailsResult.DegreeRequired,
    DegreeRequiredCode: jobDetailsResult.DegreeRequiredCode,
    DescriptionTeaser: jobSearchResult.DescriptionTeaser,
    Description: jobDetailsResult.JobDescription,
    EmploymentType: jobDetailsResult.EmploymentType,
    EmploymentTypeCode: jobDetailsResult.EmploymentTypeCode,
    ExperienceRequired: jobDetailsResult.ExperienceRequired,
    EndDate: jobDetailsResult.EndDate,
    ExternalApplication: jobDetailsResult.ExternalApplication,
    GroupIdentifier: jobSearchResult.GroupIdentifier,
    HostSite: jobSearchResult.HostSite,
    IsExpired: false,
    IndustryCodes: jobDetailsResult.IndustryCodes,
    JobTitle: jobDetailsResult.JobTitle,
    JobDetailsURL: jobSearchResult.JobDetailsURL,
    JobModifiedDate: jobDetailsResult.ModifiedDate,
    JobServiceURL: jobSearchResult.JobServiceURL,
    Latitude: jobDetailsResult.LocationLatitude,
    Location: jobSearchResult.Location,
    LocationCity: jobDetailsResult.LocationCity,
    LocationCountry: jobDetailsResult.LocationCountry,
    LocationFormatted: jobDetailsResult.LocationFormatted,
    LocationMetroCity: jobDetailsResult.LocationMetroCity,
    LocationPostalCode: jobDetailsResult.LocationPostalCode,
    LocationState: jobDetailsResult.LocationState,
    LocationStreet1: jobDetailsResult.LocationStreet1,
    LocationStreet2: jobDetailsResult.LocationStreet2,
    Longitude: jobDetailsResult.LocationLongitude,
    ONetCode: jobSearchResult.OnetCode,
    ONetFriendlyTitle: jobSearchResult.ONetFriendlyTitle,
    Pay: jobSearchResult.Pay,
    PostedDate: jobSearchResult.PostedDate,
    Requirements: jobDetailsResult.JobRequirements,
    RelocationCovered: jobDetailsResult.RelocationCovered,
    SimilarJobsURL: jobSearchResult.SimilarJobsURL,
    TravelRequired: jobDetailsResult.TravelRequired,
    TravelRequiredCode: jobDetailsResult.TravelRequiredCode
  };
}
