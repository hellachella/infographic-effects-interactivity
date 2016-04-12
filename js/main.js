var $bag = $('.shopping-bag');
var $hockey = $('.hockey');
var $body = $('body');
var $aPlus = $('.aplus');
var $puck = $('.puck');
var $hockeyLeaf = $('.hockey-leaf');
var $hockeySwoosh = $('.hockey-swoosh');
var $slide = $('.slidebaby');
var $baby = $('.baby');
var $babyparent = $('.slidebaby');
var $babywhoosh = $('.babywhoosh');
var $thumb = $('.thumb-print');
var $thumbgirl = $('.thumbgirl');
var $thumbhover = $('.thumbhover');
var $thumblines = $('.thumb-lines');
var fadeOut;
var fadeIn;

// bag
$bag.on('mouseover', function () {
  $bag.toggleClass('bag-wiggle');
  fadeOut($(this).parents('svg'));
});

$bag.on('mouseout', function () {
  $bag.removeClass('bag-wiggle');
  fadeIn();
});

// hockey

$hockey.on('click', function () {
  $puck.toggleClass('puck-in');
  $hockeyLeaf.toggleClass('grow-leaf');
  $hockeySwoosh.toggleClass('show-swoosh');
});

$hockey.on('mouseover', function () {
  fadeOut($(this));
});

// because the svg is the parent, you don't need to call the .parent svg

$hockey.on('mouseout', function () {
  fadeIn();
});

// baby
$slide.on('click', function () {
  $baby.toggleClass('slide-down');
  $babywhoosh.toggleClass('whooshline');
});

$babyparent.on('mouseover', function () {
  fadeOut($(this));
});

$babyparent.on('mouseout', function () {
  fadeIn();
});

// thumb

$thumbhover.on('click', function () {
  $thumb.toggleClass('thumb-grow');
  $thumblines.toggleClass('show-lines');
});

$thumbhover.on('mouseover', function () {
  fadeOut($(this));
});

$thumbhover.on('mouseout', function () {
  fadeIn();
});

function fadeOut (exclude) {
  $('svg').not(exclude).addClass('fade');
};

function fadeIn () {
  $('svg').removeClass('fade');
};
