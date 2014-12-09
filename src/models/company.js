module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define('Company', {
    DID : {
      type : DataTypes.STRING,
      primaryKey : true
    },
    Name : DataTypes.STRING,
    Active : DataTypes.BOOLEAN,
    CreatedDate: DataTypes.DATE,
    ModifiedDate: DataTypes.DATE
  },
  {
    timestamps : true,
    updatedAt : "ModifiedDate",
    createdAt : "CreatedDate",
    freezeTableName: true
  });

  return Company;
};
