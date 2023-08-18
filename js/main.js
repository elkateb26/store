

$(function(){ 
    var navMain = $("#navbarNav");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});
