const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Game = sequelize.define("game",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull : false
    },
    genre:{
        type: DataTypes.STRING,
    },
    price:{
        type: DataTypes.INTEGER,
    },
});

module.exports = Game;