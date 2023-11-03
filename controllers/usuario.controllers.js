const Collection = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const register = async (req,res) =>{
    try {
        const body = req.body;
        const newData = new Collection(body);
        
        //encrypt
        
        newData.Password = await newData.encryptPassword(newData.Password);
        await newData.save();

        //token

        const token = jwt.sign({id: newData._id},process.env.SECRET,{ expiresIn: 60*60*24});
        res.json({auth: true, token});
        
    } catch (error) {
        res.status(404).json({error})
    }
}

const login = async (req,res) =>{
    try {
        const body = req.body;
        const newData = new Collection(body);

        //user

        const existsUser = await Collection.findOne({Correo_electronico: newData.Correo_electronico});


        if(!existsUser){
            res.status(404).send("The user doesn't exists");
        }

        //password

        const isValidPassword =  newData.validatePassword(newData.password);
        
        if(!isValidPassword){
            res.status(404).send("The Password it's wrong");
        }

        //token

        const token = jwt.sign({id: newData._id}, process.env.SECRET, {expiresIn: 60*60*24});
        res.json({auth: true, token})
        
    } catch (error) {
        res.status(404).json({msg:'FAIL'})
    }
}




const getAll = async (req,res) => {
    try {
        const data = await Collection.find();
        return res.json({data})
    } catch (error) {
        res.status(404).json({error})
    }
}


const getById = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await Collection.findOne({_id:id});
        return res.json({data})
    } catch (error) {
        res.status(404).json({error})
    }
}


const post = async (req,res) => {
    const body = req.body;
    const newData = new Collection(body);
    try {
        const data = await newData.save();
        res.json({msg: data})
    } catch (error) {
        res.status(404).json({error})
    }
}

const update = async (req,res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await Collection.findOneAndUpdate({_id: id},body,{new: true});
        res.json({msg: 'update succesfully', data})
    } catch (error) {
        res.status(404).json({error})
    }
}


const delet = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await Collection.deleteOne({_id:id});
        return res.json({data})
    } catch (error) {
        res.status(404).json({error})
    }
}

module.exports = {
    getAll,
    getById,
    delet,
    update,
    post,
    register,
    login
}