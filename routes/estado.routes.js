const {Router} = require('express');
const {getAll,getById,post,update,delet} = require('../controllers/estado.controllers');
const router = Router();

router.get('/get', getAll)
.get('/getById/:id', getById)
.post('/post', post)
.patch('/update/:id', update)
.delete('/delete/:id', delet)


module.exports = router;
