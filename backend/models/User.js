const mysql = require("mysql");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
//ORM = facilitateur de requete - Object relation mapping

const User = sequelize.define('User', {
  // Model attributes are defined here
  login: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = { User};