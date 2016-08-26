var close = $('#btn-menu-close');
var open = $('#toggle-btn');
var menu = $('#slide-menu');


open.on('tap', function() {
menu.addClass('visible-menu');
});

close.on('tap', function() {
	menu.removeClass('visible-menu');
});


open.on('click', function() {
menu.addClass('visible-menu');
});

close.on('click', function() {
	menu.removeClass('visible-menu');
});

