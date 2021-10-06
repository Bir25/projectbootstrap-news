$("span").click(function(){
    $(".nave ul").toggle();
})


$(window).scroll(function(){
    if($(this).scrollTop()>100)
    {
        $(".arrow").show()
        $(".nave").addClass( "sticky")
    }
    else
    {
        $(".arrow").hide()
        $(".nave").removeClass("sticky")
       
    }
});
 








$(document).ready(function(){
$('.move').owlCarousel({
    items:4,
    loop:false,
    margin:20,
    nav:false,
    dots:true,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true,
        }
    }
   
});
$('.net').owlCarousel({
    items:1,
    loop:false,
    margin:30,
    nav:false,
    dots:true,
    autoplay:true,
   
});
});


