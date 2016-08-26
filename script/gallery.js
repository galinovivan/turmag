$(document).ready(function() {
   var toggle = $('.tovar-prew-toggle li');
toggle.click(function(e) {
  e.preventDefault();
  toggle.removeClass('green-bord');
  $(this).addClass('green-bord');
});
})


