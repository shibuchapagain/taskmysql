const Sequelize = require("sequelize");
const sequelize = new Sequelize("shibudb", "root", "rootroot", {
  host: "localhost",
  dialect: "mysql",
});

const Actions = sequelize.define("actions", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: Sequelize.ENUM("vanzare", "vizita", "like"),
    allowNull: false,
  },
  value: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  prod: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Create the table in the database
Actions.sync()
  .then(() => {
    console.log("Table created successfully");
  })
  .catch((error) => {
    console.error("Error creating table:", error);
  });

module.exports = { Actions };
