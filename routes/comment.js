const router = require('express').Router();

const tokenValidator = require('../middleware/checkToken');

const getAll = require('../controllers/comment/getAll');
const deleteComment = require('../controllers/comment/delete');
const create = require('../controllers/comment/create');
const edit = require('../controllers/comment/edit');

router.get('/', getAll);
router.delete('/:id', tokenValidator, deleteComment);
router.post('/', create);
router.put('/:id', tokenValidator, edit);

module.exports = router;
