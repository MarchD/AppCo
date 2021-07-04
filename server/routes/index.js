const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const userStatisticsRouter = require('./userStatisticsRouter');

router.use('/users', userRouter);
router.use('/statistic', userStatisticsRouter)

module.exports = router;
