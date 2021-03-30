// menu function
function openMenu(){
    document.querySelector("#navbar").style.width="100%";
}
function closeMenu(){
    document.querySelector("#navbar").style.width="0%";
}
//smooth scroll
$(".menu-container ul li a, .next-section a, .up-section a").on("click", function(){
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
    }, 1000);
});
//wow js
new WOW().init();
//mixitup
var mixer = mixitup('.project-grid-box');