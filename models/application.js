module.exports = function(sequelize, DataTypes) {
    var Application = sequelize.define("Application", {
        applicationID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        managerApproval: DataTypes.BOOLEAN,
        pmApproval: DataTypes.BOOLEAN,
        status: {
            type: DataTypes.STRING,
            validate: {
                len: [1,50]
            }
        }
    });

    return Application;
};
