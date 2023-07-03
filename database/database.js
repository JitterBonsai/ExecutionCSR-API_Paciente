const sequelize = require('sequelize');
const connection = new sequelize(
    'hospital',
    'root',
    '',
    {
        'host': 'localhost',
        'dialect': 'mysql',
        'timezone': '-03:00',
        'port': 3306
    }
);
module.exports = connection;