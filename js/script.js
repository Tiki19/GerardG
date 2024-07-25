$(document).ready(function(){
    //SideNav
    $('.button-collapse').sideNav();
    //Slider
    $('.slider').slider({
        indicators:false,
        height:500,
        transition:500,
        interval:6000
    })
    //Carta
    $('.materialboxed').materialbox();
    
    //ScrollSpy
    $('.scrollspy').scrollSpy();
})