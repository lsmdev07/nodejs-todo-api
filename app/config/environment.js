const environment = {
    development: {
        mysql: {
            username:'semi',
            password:'sml07190',
            database:'todo_webapp'
        },
        sequelize: {
            force:false
        }
    },
    test: {
        mysql: {
            username: 'semi',
            password: 'sml07190',
            database: 'node_api_tuto_test'
        },
        sequelize: {
            force:true
        }
    },
    prduction: {

    }

}
const nodeEnv = process.env.NODE_ENV || 'test';
module.exports = environment[nodeEnv];