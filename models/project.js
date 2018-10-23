module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        projectId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pmEmployeeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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

/*
    Project.associate = function(models) {
        Project.belongsToMany(models.User,
            {
                through: models.Application,
                foreignKey: 'projectId'
            }
        );
    };
*/

    Project.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Project.hasMany(models.Application);
    };

    return Project;
};
