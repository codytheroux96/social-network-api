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
router.route('/:Id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:userId/friend/friendId').post(addFriend).delete(deleteFriend);

module.exports = router;