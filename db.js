let userModel = require('/user');

let addUser = async (req, res) => {
    let user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    try {
        let addRes = await userModel.create(user);
        res.status(201).json(addRes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

let findUser = async (req, res) => {
    let userId = req.params.id;
    try {
        let findRes = await userModel.findOne({ _id: userId });
        res.status(200).json(findRes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

let updateUser = async (req, res) => {
    let userId = req.params.id;
    let user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    try {
        let updateRes = await userModel.updateOne({ _id: userId }, user);
        res.status(200).json(updateRes); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    try {
        let deleteRes = await userModel.deleteOne({ _id: userId });
        res.status(200).json(deleteRes); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addUser, findUser, updateUser, deleteUser };