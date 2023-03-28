

module.exports = {
    HOST: "localhost",
    PORT: 3000,
    USER: "root",
    PASSWORD: "toor",
    DB: "genius-gym",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};