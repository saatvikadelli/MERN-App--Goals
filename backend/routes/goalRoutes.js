const express = require('express');
const router = express.Router();
const {getGoals, setGoals, deleteGoals, putGoals} = require('../controllers/goalController.js');


router.route('/').get(getGoals).post(setGoals);
router.route('/:id').get(getGoals).put(putGoals);


router.delete('/:id', deleteGoals);


module.exports = router;
