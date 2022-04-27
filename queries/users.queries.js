const Users = require("../database/models/user.model");

exports.createUser = async (body) => {
    try {
        const user = await Users.create({
            username: body.username,
            local: {
                email: body.email,
                password: body.password
            }
        })

        return user;
    } 
    catch (error) {
        throw error;
    }
}

exports.findUserByEmail = async (email) => {
    return Users.findOne({ "local.email": email }).exec()
}