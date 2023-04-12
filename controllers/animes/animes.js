const Sequelize  = require("sequelize");
const Connect = require("../../database/database");



const Anime = Connect.define("anime", {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    seasons:{
        type: Sequelize.STRING,
        defaultValue: 1
    },
    author:{
        type: Sequelize.STRING,
        allowNull: false
    },
    synopsis:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    coverUrl:{
        type: Sequelize.STRING,
        allowNull: false
    },
    animeType:{
        type:Sequelize.STRING,
        allowNull: false
    }

});

Anime.sync({force:false});

module.exports = Anime;
