const express = require('express');
const { authenticate } = require('../middlewares/auth');
const Worksite = require('../models/Worksite');

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  const worksites = await Worksite.find()
  try{
    if (worksites.length <= 0) {
        res.status(200).json({status: 204, data: worksites})
        return
    }
    res.status(200).json({status: 200, data: worksites})
  } catch (err) {
    res.status(200).json({status: 204, data: err.message})
  }
});

module.exports = router;