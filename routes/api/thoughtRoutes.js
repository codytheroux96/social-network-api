const router = require('express').Router();

const {
  getThoughtById,
  getAllThoughts,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

module.exports = router;