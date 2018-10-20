module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userID: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false
	},
	firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,50]
      }
    },
	lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,50]
      }
    },
	currentPostion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,100]
      }
    },
	managerID: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,50]
      }
    },
	phone: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	skill1: {
      type: DataTypes.STRING,
      validate: {
        len: [1,50]
      }
    },
	skill2: {
      type: DataTypes.STRING,
      validate: {
        len: [1,50]
      }
    },
	skill3: {
      type: DataTypes.STRING,
      validate: {
        len: [1,50]
      }
    },
	skill4: {
      type: DataTypes.STRING,
      validate: {
        len: [1,50]
      }
    },
	skill5: {
      type: DataTypes.STRING,
      validate: {
        len: [1,50]
      }
    },
	skill6: {
      type: DataTypes.STRING,
      validate: {
        len: [1,50]
      }
    },
	skill7: {
      type: DataTypes.STRING,
      validate: {
        len: [1,50]
      }
    },
	skill8: {
      type: DataTypes.STRING,
      validate: {
        len: [1,50]
      }
    },
	skill9: {
      type: DataTypes.STRING,
      validate: {
        len: [1,50]
      }
    },
	skill10: {
      type: DataTypes.STRING,
      validate: {
        len: [1,50]
      }
    }
  });

  User.associate = function(models) {
    User.belongsToMany(models.Project, { through: models.Application });
  };

  return User;
};