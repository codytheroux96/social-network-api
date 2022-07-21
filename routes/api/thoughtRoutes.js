const router = require('express').Router();
//all the methods that will be used for Thought schema in thoughtController
const {
  getThoughtById,
  getAllThoughts,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

//the routes that will be used to access the above methods
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions/:reactionId?').post(addReaction).delete(deleteReaction);

module.exports = router;