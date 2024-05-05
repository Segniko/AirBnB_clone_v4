window.addEventListener('load', function () {
  // get API status
  $.ajax('http://0.0.0.0:5001/api/v1/status').done(function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  // Based on 1-hbnb.js
  const amenityId = {};
  $('input[type=checkbox]').click(function () {
    if ($(this).prop('checked')) {
      amenityId[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenityId[$(this).attr('data-id')];
    }
    if (Object.keys(amenityId).length === 0) {
      $('div.amenities h4').html('&nbsp');
    } else {
      $('div.amenities h4').text(Object.values(amenityId).join(', '));
    }
  });
});
