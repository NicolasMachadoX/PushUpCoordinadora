const {Router} = require('express');
const {getAll,getById,post,update,delet, getSucursalLinked} = require('../controllers/sucursal.controllers');
const router = Router();

router.get('/get', getAll)
.get('/getLinked/:id', getSucursalLinked)
.get('/getById/:id', getById)
.post('/post', post)
.patch('/update/:id', update)
.delete('/delete/:id', delet)


module.exports = router;
