const models = require('../app/models/models');
const config = require('../app/config/environment');

module.exports = ()=>{
    return models.sequelize.sync({force: config.force});
}