const { User } = require('../models');

const userController = {
//controller for creating a user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },
//controller for getting a single user
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({ path: 'thoughts'})
      .populate({ path: 'friends' })
      .select('-__v')
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user with this ID!' });
          return;
        }
        res.json(dbUserData)
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err)
      })
  },
//controller for getting all users
  getAllUsers(req, res) {
    User.find({})
      .populate({ path: 'thoughts' })
      .populate({ path: 'friends' })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  },
//controller for updating a user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user with this ID!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err))
  },
//controller for deleting a user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user with this ID!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
//controller for adding a friend
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: { friends: params.friendsId } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({message: 'No user with this ID!'});
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
//controller for deleting a friend
  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendsId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user with this ID!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

};



module.exports = userController;