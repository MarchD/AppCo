const ApiError = require('../error/ApiError');
const {UserStatistic} = require('../models/models');
const {Op} = require('sequelize');

class UserStatisticController {
    async getOne(req, res, next) {
    const firstDate = new Date(1970, 0, 1);
    const currentDate = new Date();
    const {user_id, fromDate = firstDate, toDate = currentDate} = req.query;

    const statistic = await UserStatistic.findAll({
      where: {
        user_id,
        date: {
          [Op.between]: [fromDate, toDate]
        }
      },
    });

    if (!user_id) {
      return next(ApiError.badRequest("Info isn't found"));
    }

    res.json(statistic);
  }
}

module.exports = new UserStatisticController();
