
$(function() {
    $('#menu').click(function(){
        $('.line').removeClass('init');
        $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
        $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
        $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');
        $('.menu_bar').toggleClass('active');
    });


});

function mclick (el, temp, percent) {
    let temp2 = el.innerHTML;
    if(temp == temp2) {
        el.innerHTML = percent;
        el.classList.add('active');
    } else {
        el.innerHTML = temp;
        el.classList.remove('active');
    }
}


