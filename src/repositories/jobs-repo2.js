var Sequelize = require('sequelize');

function JobsRepo(sqlConnectionString) {
  this.databaseConnectionString = sqlConnectionString;
}

JobsRepo.prototype.insertJob = function(job, callback) {
  var sequelize = new Sequelize(this.databaseConnectionString, { dialect : 'mysql' });
  //var connection = sqlDriver.createConnection(this.databaseConnectionString);

  //There was once a very large insert statement here..we're renaming columns at the moment
}

module.exports = JobsRepo;
