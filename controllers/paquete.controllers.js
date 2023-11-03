const Collection = require('../models/Paquete');

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
    post
}