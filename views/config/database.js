// const connection = require("./connection")
require('dotenv/config');

const Sequelize = require("sequelize");
// module.exports = new Sequelize(process.env.MARIADB_URI, {
//     define: {
//         timestamps: false,
//         freezeTableName: true,
//     },
// });

try {
    const sequelize = new Sequelize(process.env.MARIADB_URI, {
        define: {
            timestamps: false,
            freezeTableName: true,
        }
    });
    module.exports = sequelize;
} catch (err) {
    console.error('Could not connect to db');
    console.error(err);
    process.exit();
}