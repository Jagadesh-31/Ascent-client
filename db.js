let userModel = require('./user');

let addUser = async (req, res) => {
    let user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    try {
        let addRes = await userModel.create(user);
        res..status(201).json(addRes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

let findUser = async (req, res) => {
    let username = req.params.username;
    console.log(`Finding user with username: ${username}`); // Add this line for logging
    try {
        let findRes = await userModel.findOne({ username : username });
        if (!findRes) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(findRes);
    } catch (error) {
        console.error(`Error finding user: ${error.message}`); // Add this line for logging
        res.status(500).json({ error: error.message });
    }
};


module.exports = { addUser, findUser};
