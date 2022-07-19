const router = require('express').Router();

const {
  getUserById,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController')

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:id/friends/:friendsId').post(addFriend).delete(deleteFriend);

module.exports = router;