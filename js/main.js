var $bag = $('.bag');
var $hockey = $('.hockey');
var $body = $('body');
var $aPlus = $('.aplus');
var $puck = $('.puck');
var $hockeyLeaf = $('.hockey-leaf');
var $slide = $('.slidebaby');
var $baby = $('.baby');
var $babywhoosh = $('.babywhoosh');
var $thumb = $('.thumb-print');
var $thumbgirl = $('.thumbgirl');

// bag
$bag.on('mouseover', function () {
  $bag.toggleClass('bag-wiggle');
});

$bag.on('mouseout', function () {
  $bag.removeClass('bag-wiggle');
});

// hockey

$hockey.on('click', function () {
  $puck.toggleClass('puck-in');
  $hockeyLeaf.toggleClass('grow-leaf');
});

// baby
$slide.on('click', function () {
  $baby.toggleClass('slide-down');
  $babywhoosh.toggleClass('whooshline');
});

// thumb

$thumbgirl.on('click', function () {
  $thumb.toggleClass('thumb-grow');
});

