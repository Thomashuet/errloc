var callsite = require('callsite');

module.exports = function(fmt) {
  if(!fmt) fmt = "%s:%s";
  return function(callback) {
    var site = callsite()[1];
    return function() {
      if(arguments[0]) console.error(fmt, site.getFileName(), site.getLineNumber());
      callback.apply(this, arguments);
    };
  };
};
