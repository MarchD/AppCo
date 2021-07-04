const Router = require('express');
const router = new Router();
const userStatisticsController = require('../controllers/userStatisticsController');

router.get('/', userStatisticsController.getOne);

module.exports = router;
