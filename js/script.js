$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 1500});
    $("#carousel-pause").click(function () {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function () {
        $("#mycarousel").carousel('cycle');
    });
});

$(document).ready(function(){
    $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
    });
        });