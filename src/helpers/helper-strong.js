(function() {
  module.exports.register = function(Handlebars, options) {

    // Customize this helper
    Handlebars.registerHelper('strong', function(str) {
      var content = '<strong>' + str + '</strong>';
      return new Handlebars.SafeString(content);
    });

  };
}).call(this);
