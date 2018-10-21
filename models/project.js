module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        projectID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,200]
            }
        },
        description: DataTypes.TEXT,
        product: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1,200]
                }
        },
        projectStartDate: DataTypes.DATE,
        projectDuration: DataTypes.INTEGER,
        skills: DataTypes.TEXT
    });

    Project.associate = function(models) {
            Project.belongsToMany(models.User,
                {
                    through: models.Application,
                    foreignKey: 'projectId' 
                });
    };

    return Project;
};
