

$(function() {
    $('#line-wrapper').click(function(){
        $('.line').removeClass('init');
        $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
        $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
        $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');
        $('.menu_bar').toggleClass('active');
    });



});






