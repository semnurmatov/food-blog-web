const ftr = $("li a");


$(".navbar-toggler aria-expanded").click(function(){
    $(".search-box").remove();
})
    


$(".fixed-item a").hover(function(){
    $(this).css("color","red");
}, function(){
    $(this).css("color","rgb(216, 215, 215)");
});

$(".nav-link").hover(function(){
    $(this).css("color","#20e706");

}, function(){
    $(this).css("color","#575757");
});


// $(".nav-link").on({
//     click: function(){
//         $(this).css("color", "grey");
//     }
// });
    