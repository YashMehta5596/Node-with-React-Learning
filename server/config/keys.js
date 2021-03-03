if (process.env.NODE_ENV === 'production') {
  // In prod mode
  module.exports = require('./prod');
} else {
  //in dev mode
  module.exports = require('./dev');
}
