window.addEventListener('load', function () {
  // script must be excuted only when DOM is loaded
  const amenityId = {};
  $('input[type=checkbox]').change(function () {
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
