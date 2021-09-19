const ApiError = require('../error/ApiError');

const {User, UserStatistic} = require('../models/models');

class UserController {
  async getAll(req, res) {
    const {limit = 16, page = 1} = req.query;
    let offset = page * limit - limit;

    const countOfUsers = await User.count();
    const users = await User.findAll({
      include: [{
        model: UserStatistic,
        attributes: ['clicks', 'page_views']
      }],
      limit,
      offset
    });

    const usersWithStatistic = JSON.parse(JSON.stringify(users)).map(user => {
      const newUser = {...user};

      const totals = user.user_statistics.reduce((acc, statistic) => {
        acc.total_page_views += statistic.page_views;
        acc.total_clicks += statistic.clicks;

        return acc;
      }, {total_page_views: 0, total_clicks: 0})

      delete newUser.user_statistics;

      return {
        ...newUser,
        ...totals
      }
    })

    return res.json({
      data: usersWithStatistic,
      meta: {
        currentPage: page,
        lastPage: Math.ceil(countOfUsers / limit)
      }
    });
  }

  async getOne(req, res, next) {
    const {id} = req.params;

    const user = await User.findOne({
      include: [{
        model: UserStatistic,
        attributes: ['clicks', 'page_views']
      }],
      where: {id},
    })

    const parsedUser = JSON.parse(JSON.stringify(user));

    const userStatistic = parsedUser.user_statistics.reduce((acc, statistic) => {
        acc.total_page_views += statistic.page_views;
        acc.total_clicks += statistic.clicks;

      return acc;
    }, {total_page_views: 0, total_clicks: 0});


    delete parsedUser.user_statistics;

    if (!id) {
      return next(ApiError.badRequest('Index not specified'))
    }

    res.json({...parsedUser, ...userStatistic});
  }
}

module.exports = new UserController();
