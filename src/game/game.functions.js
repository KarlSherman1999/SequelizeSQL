const Game = require("./game.table");

exports.addGame = async (gameObj) => {
    try{
        await Game.sync();
        await Game.create(gameObj);
        console.log(`Successfully added ${gameObj.title} to the database`)
    }catch(error){
        console.log(error)
    }
};

exports.deleteGame = async (gameObj) => {
    try{
        await Game.destroy({where: gameObj});
        console.log(`Successfully removed ${gameObj.title} from the database`)
    }catch(error){
        console.log(error)
    }
};

exports.findGame = async (gameObj) => {
    try{
        const find = await Game.findAll({where:gameObj});
        console.log(`Found info on ${gameObj.title}`);
        console.log(find);
    }catch(error){
        console.log(error)
    }
}

exports.updateGame = async (updateObj,gameObj) => {
    try{
        await Game.update(updateObj,{where:gameObj});
        console.log(`Successfully updated ${gameObj.title}`)
    }catch(error){
        console.log(error)
    }
}
