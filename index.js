const hamMenu = $(".aria-expanded");
const ftr = $(".text-reset");


if(hamMenu == true){
    $(".search-box").remove();
};

$("p").forEach(element => {
    element.on("mouseover", function(){
             $("p").css("color", "red");
        });
});
    