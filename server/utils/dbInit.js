const {User} = require('../models/models');
const {UserStatistic} = require('../models/models');
const fs = require('fs');

const parseJson = (model, pathOfFile) => {
  return model.findAll()
    .then(item => {
      if (!item.length) {
        const rawData = fs.readFileSync(pathOfFile);
        const parsedData = JSON.parse(rawData);
        model.bulkCreate(parsedData);
      }
    })
}

module.exports = async function() {
  await parseJson(User, 'users.json');
  await parseJson(UserStatistic, 'users_statistic.json');
}
