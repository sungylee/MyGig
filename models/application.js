module.exports = function(sequelize, DataTypes) {
    var Application = sequelize.define("Application", {
        applicationID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        managerApproval: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        pmApproval: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        status: {
            type: DataTypes.STRING,
            validate: {
                len: [1,50]
            }
        }
    });

    Application.associate = function(models) {
        Application.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Application.belongsTo(models.Project, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Application;
};
