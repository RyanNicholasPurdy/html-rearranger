var $h1above = $('<h1>');
var $h1below = $('<h1>');
var $ulabove = $('<ul>');
var $ulbelow = $('<ul>');

$h1above.html('Below ground veggies');
$h1below.html('Above ground veggies');

$('body').append($h1above);
$('body').append($ulabove);

$('body').append($h1below);
$('body').append($ulbelow);

$('ul li').each(function () {
  if ($(this).hasClass('above')) {
    $ulabove.append($(this));
  } else {
    $ulbelow.append($(this));
  }
});
