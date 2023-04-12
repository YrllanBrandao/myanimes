const  Sequelize  = require("sequelize");
const Connection = require("../../database/database");



const User = Connection.define("user", {
    profilePictureUrl:{
        type: Sequelize.STRING,
        defaultValue: "https://i.pinimg.com/originals/b6/bd/77/b6bd77a23c2fd23344b42e64c3255868.jpg"
        
    },
    nickname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
})


User.sync({force:false})

module.exports = User;