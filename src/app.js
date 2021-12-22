const yargs = require("yargs");
const connection = require("./db/connection");
const { addGame,deleteGame,findGame, updateGame } = require("./game/game.functions");

const app = async (args) =>{
    try{
        if (args.add){
            const gameObj = {title: args.title,
                genre: args.genre,
                price: args.price
            };
            await addGame(gameObj);
        }
        if(args.delete){
            gameObj = {title: args.title};
            await deleteGame(gameObj);
        }
        if(args.update){
            const updateObj = {
                genre: args.genre,
                price: args.price
            };
            gameObj = {title: args.title};
            await updateGame(updateObj,gameObj);
        }
        if(args.find){
            const gameObj = {title: args.title};
            await findGame(gameObj);
        }
    }catch(error){
        console.log(error);
    }
}
app(yargs.argv)