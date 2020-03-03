const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const controller = require('./user.controller');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', controller.index);
router.get('/:id',controller.show);
router.post('/:id/del',controller.destroy);
router.post('/', controller.create);
router.post('/:id/put', controller.update);
module.exports = router;