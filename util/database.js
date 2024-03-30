const Sequelize = require("sequelize");

const sequelize = new Sequelize("booking-app", "root", "riverdale", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
