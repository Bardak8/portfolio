$(document).ready(function() {
    $(".scroll").click(function(event){
        $('html, body').animate({scrollTop: '+=765px'}, 800);
    });
});

$(document).ready(function() {
    $(".scroll_secund").click(function(event){
        $('html, body').animate({scrollTop: '-=765px'}, 800);
    });
});