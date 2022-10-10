
const User = require('../models/users');
const Library = require('../models/libary');


async function signUp(req, res) {
    const body = req.body;
    body.membersince = new Date().toDateString();
    try {

        const user = await User.create(body)
        const { salt, hash } = await User.createPassword(body['userpass']);
        user.password_salt = salt;
        user.password_hash = hash;
        await user.save();
        res.status(201).json({
            Estado: "User created",
            usuario: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            address: user.address,
            email: user.email,
            phonenumber: user.phonenumber,
            rol: user.rol,
            membersince: user.membersince
        });
    }
    catch (err) {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
            return res.status(400).json({
                error: err.errors.map(e => e.message)
            })
        }
        else {
            throw err;
        }
    }

}

async function getUser(req, res) {
    try {
        const id = req.params.id;

        if (!Number(id)) {

            return (res.status(400).json({ error: "Try with numeric value" }))
        }
        
        const user = await User.findByPk(id, {
            include: [{ association: User.hasMany(Library) }]
        });
        if (!user) {
            return res.status(404).json({ mensaje: "id not found in DB, try with another id" })
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ "info": "Check error",
        error : "description " + error})
    }
}

async function getUsers(req, res) {

    try {
        if (!!req.auth && req.auth.role == 'admin') {
            const users = await User.findAll({
                include: [{ association: User.hasMany(Library) }]
            });
            return res.status(200).json(users);
        }
        const user = await User.findAll({ attributes: ['username', 'firstname', 'email', 'rol'] })
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ "info": "Error in request",
                                error : "description " + error})
    }
}

async function updateUser(req, res) {
    try {
        const id = req.params.id;
        const user = req.body;
        if (!Number(id)) {

            return (res.status(400).json({ error: "Try with numeric value" }))
        }
        const newUser = await User.findByPk(id);
        if(req.user.rol != 'admin' && req.auth.user != newUser.username){
            console.log("usuario diferente")
            return res.status(403).json({"status": "Cannot update others profiles, just only update your own profile"})
        }

        
        
        
        /////  
        for (const key in user) {
                     
              if (!newUser[key] && newUser[key] != null){
                console.log("no encontrado")
                return res.status(400).json({Error: "Attribute not update, attribute not valid"})
              }
            
        }
        const update = await User.update(user, { where: { id } });
    
        res.status(200).json({status : "Attribute was updated",
                               user: user });
    } catch (err) {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
            return res.status(400).json({
                error: err.errors.map(e => e.message),
                "description" : "try with other value"
            })
        }
        else {
            throw err;
        }
     }

}

async function deleteUser(req, res) {
    try {
        const id = req.params.id;
        if (!Number(id)) {

            return (res.status(400).json({ error: "Try with numeric value" }))
        }
        const destruido = User.destroy({ where: { id } });
        res.status(200).json({ destruido });
    } catch (error) {
        res.status(400).json({ "info": "Error in request",
                                error : "description " + error})
    }
}

async function bringByAttributes(req, res) {
    try {
        const user = await User.findAll({ attributes: ['username', 'firstname', 'email', 'rol'] });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ "info": "Error in request",
                                error : "description " + error})
    }
}
async function bringByRol(req, res) {
    try {
        const rol = req.params.rol;
        const user = await User.findAll({ where: { rol } });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ "info": "Error in request",
        error : "description " + error})
    }
}

async function logIn(req, res) {
    try {
        const body = req.body;
        const user = await User.findOne({ where: { username: body.username } });
        if (!user) {
            return res.status(404).json({ error: "user:" + body.username + " not found" });

        }
        if (User.validatePassword(body.userpass, user.password_salt, user.password_hash)) {
            return res.status(200).json({
                user: user.username,
                email: user.email,
                //role: user.rol,
                token: User.generateJWT(user)
            })


        } else {
            return res.status(400).json({ mensaje: "Password incorrect, please try again" })
        }
    } catch (error) {
        res.status(400).json({ "info": "Error in request",
                                error : "description " + error})
    }
}


module.exports = {
    signUp,
    logIn,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    bringByRol,
    bringByAttributes
}