const Connect = require("../database/database");
const User = require("../controllers/user/user");
const Sequelize  = require("sequelize");


const PasswordToken = Connect.define("passwordToken", {
    used: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    token:  {
        type: Sequelize.TEXT
    },
    email:{
        type:Sequelize.STRING
    }
})

PasswordToken.sync({force:false});


module.exports = PasswordToken