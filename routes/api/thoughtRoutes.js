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

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reaction').post(addReaction).delete(deleteReaction);

module.exports = router;