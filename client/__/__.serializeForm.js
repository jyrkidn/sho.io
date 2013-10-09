__.serializeForm = function (form) {
  console.log('__.serializeForm', form);

	var array = $(form).serializeArray(),
      object = _.object(
        _.map(array, function (obj) {
          // Разделители __ в поле name превращаем в точку
          return obj.name.replace(/__/g, '.')
        }),
        _.pluck(array, 'value')
      );

  console.log('__.serializeForm', object);

	return object;
};