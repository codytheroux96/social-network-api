const router = require('express').Router();

const {
  getThoughById,
  getAllThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

module.exports = router;