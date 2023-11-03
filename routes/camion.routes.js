const {Router} = require('express');
const {getAll,getById,post,update,delet, getPlacaCarroById} = require('../controllers/camion.controllers');
const router = Router();

router.get('/get', getAll)
.get('/getById/:id', getById)
.get('/getPlacaById/:id', getPlacaCarroById)
.post('/post', post)
.patch('/update/:id', update)
.delete('/delete/:id', delet)


module.exports = router;
