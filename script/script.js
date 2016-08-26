$(document).ready(function() {
    $('#special-controls').on('click', function() {
        $('#special-controls').addClass('active');
        $('#popular-controls').removeClass('active');
    });
    $('#popular-controls').on('click', function() {
        $('#popular-controls').addClass('active');
        $('#special-controls').removeClass('active');
    });
   
   

   
})