var CompanyQueueJobSearchPagesWorker = require('./services/companyjobsearch-queue-service.js');
var CompanyQueueWorker = require('./services/company-queue-worker-service.js');
var ProcessJobsQueueWorker = require('./services/processjobs-queue-worker-service.js');

var pagesQueueWorker = new CompanyQueueJobSearchPagesWorker();
var companyQueueWorker = new CompanyQueueWorker();
var processJobsQueueWorker = new ProcessJobsQueueWorker();

pagesQueueWorker.startWorker();
companyQueueWorker.startWorker();
processJobsQueueWorker.startWorker();
