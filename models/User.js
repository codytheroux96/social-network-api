const {Schema, model } = require('mongoose');
//making a schema for users
const userSchema = new Schema (
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{
      type: Schema.Types.ObjectId, ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId, ref: 'User'
    }]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  }
)
//getting the friend count by returning friends.length
userSchema.virtual('friendsCount').get(function() {
  return this.friends.length;
})
//exporting User
const User = model ('User', userSchema);


module.exports = User;