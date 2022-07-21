const router = require('express').Router();
//all the methods that will be made for User schema in userController
const {
  getUserById,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController')

//the routes that will be used to access the above methods
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:id/friends/:friendsId').post(addFriend).delete(deleteFriend);

module.exports = router;