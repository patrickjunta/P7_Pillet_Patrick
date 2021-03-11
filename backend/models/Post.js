const mysql = require("mysql");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
//ORM = facilitateur de requete - Object relation mapping

const Post = sequelize.define('Post', {
  // Model attributes are defined here
  titre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  texte: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  date: {
    type: DataTypes.DATE
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});
// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post); // true

module.exports = { Post};