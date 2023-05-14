const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const moment = require("moment");
const { Actions } = require("./table");

router.post("/createAction", async (req, res) => {
  try {
    const { type, value, time, prod } = req.body;
    const data = await Actions.create({ type, value, time, prod });
    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.json({
      error: true,
      message: err,
    });
  }
});

router.get("/getAllActions", async (req, res) => {
  try {
    const data = await Actions.findAll();
    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.json({
      error: true,
      message: err,
    });
  }
});

router.get("/findCount/:id", async (req, res) => {
  const productId = +req.params.id;
  const type = req.query?.type; // like, vanzare, vizita
  const currentDate = moment();
  const oneWeekAgo = moment().subtract(1, "week");
  try {
    const count = await Actions.count({
      where: {
        type: type,
        prod: productId,
        currentDate: {
          [Op.between]: [oneWeekAgo, currentDate],
        },
      },
    });
    res.json({
      success: true,
      data: count,
    });
  } catch (err) {
    res.json({
      error: true,
      message: err,
    });
  }
});

module.exports = router;
