const router = require('express').Router();

const {
  getUserbyId,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController')


module.exports = router;