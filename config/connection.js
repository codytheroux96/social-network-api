const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});



module.exports = connection;