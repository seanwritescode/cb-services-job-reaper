process.env.NODE_CONFIG_DIR = "./config";

var kue = require('kue');
var CompanyRepo = require('./repositories/company-repo.js');
var CompanyQueueService = require('./services/company-queue-service.js');

var companyRepo = new CompanyRepo();
var companyQueue = kue.createQueue();
var companyQueueService = new CompanyQueueService(companyRepo, companyQueue);

companyQueueService.FillQueue();
