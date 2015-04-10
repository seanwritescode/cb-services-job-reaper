var Sequelize = require('sequelize');
var Config = require('config');

var sequelize = new Sequelize(Config.get('Database.connectionString'), {
  dialect : 'mysql',
  logging : true,
  pool: { maxConnections: 5, maxIdleTime: 30 },
});

// load models
var models = [
  'job',
  'company'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// export connection
module.exports.sequelize = sequelize;
