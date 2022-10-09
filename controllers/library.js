const Library = require('../models/libary');

function createLibrary(req, res){
    const body = req.body;
    Library.create(body).then(lib =>{
        res.status(201).json(lib);
    });
}

async function getLibrary(req, res){
    const id = req.params.id;
    
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const lib = await Library.findByPk(id,{
        include: [{association: Editorial.belongsTo(book)}]
    });
    if (!lib){
        res.status(404).json({mensaje : "id not found in DB, try with another id"})
    }
    res.status(200).json(lib);
}

async function getLibraries(req, res){
    try{
    const lib = await Library.findAll();
    res.status(200).json(lib);
    }
    catch (error){
        res.status(400).json({error : "Intenta refrescar la página"})
    }
}

async function updateLibrary(req, res){
    const id = req.params.id;
    const lib = req.body;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const update = await Library.update(lib,{where: {id}});
    const newLib = await Library.findByPk(update[0]);
    res.status(200).json(newLib);
}

async function deleteLibrary(req, res){
    const id = req.params.id;
    if(!Number(id)){
        
        return (res.status(400).json({error : "Try with numeric value"}))
    }
    const destruido = Library.destroy({where: {id}});
    res.status(200).json({destruido});
}

module.exports = {
    createLibrary,
    getLibraries,
    getLibrary,
    deleteLibrary,
    updateLibrary
}