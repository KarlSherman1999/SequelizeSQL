const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Game = sequelize.define("game",{
    _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
    },
    genre:{
        type: DataTypes.STRING,
    },
    price:{
        type: DataTypes.INTEGER,
    },
});

const GameList = sequelize.define("gamelist",{
    _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
    }
});

const associations = async () =>{
    GameList.belongsToMany(Game,{through:"title"});
    Game.belongsToMany(GameList,{through:"title"});
    await sequelize.sync();
}

associations();

module.exports = Game,GameList;