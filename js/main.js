var $bag = $('.bag');
var $hockey = $('.hockey');
var $body = $('body');
var $aPlus = $('.aPlus');
var $puck = $('.puck');

$bag.on('mouseover', function() {
  $bag.addClass('bag-wiggle');
});

$bag.on('mouseout', function() {
  $bag.removeClass('bag-wiggle')
});


$hockey.on('mouseover', function () {
  $bag.addClass('fade');
  $aPlus.addClass('fade');
});

$hockey.on('mouseout', function () {
  $bag.removeClass('fade');
  $aPlus.removeClass('fade');
});

$hockey.on('click', function () {
  $puck.toggleClass('puck-in');
});


