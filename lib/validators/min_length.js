Astronomy.Validator({
  name: 'minLength',
  aliases: ['minLen', 'minlen'],
  validate: function(fieldName, value, minLength) {
    if (!value) {
      return false;
    }

    return value.length >= minLength;
  },
  onvalidationerror: function(e) {
    var fieldName = e.data.field;
    var minLength = e.data.options;

    return 'The "' + fieldName + '" length has to be at least ' + minLength;
  }
});