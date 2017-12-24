var express = require('express');
var router = express.Router();
const Baskets = require('../controllers/Baskets');

/* GET home page. */
router.get('/', Baskets.find);
router.post('/create', Baskets.create);
router.put('/update/:id', Baskets.update);
router.delete('/delete/:id', Baskets.destroy);

module.exports = router;
