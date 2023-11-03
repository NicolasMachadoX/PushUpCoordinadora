const {Router} = require('express');
const {getAll,getById,post,update,delet,register,login} = require('../controllers/usuario.controllers');
const tokenValidator = require('../handlers/tokenValidator');
const router = Router();

router.post('/register', register).post('/login', tokenValidator, login);

router.get('/get', getAll)
.get('/getById/:id', getById)
.post('/post', post)
.patch('/update/:id', update)
.delete('/delete/:id', delet)


module.exports = router;
