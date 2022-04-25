/* On Scroll Js */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var header= document.getElementById("header");
    header.classList.add('active');
  } else {
    var header= document.getElementById("header");
    header.classList.remove('active');
  }
}
/* On Scroll Js */

 
var owl = $('#banner-slider');
owl.owlCarousel({
     loop: false,
     dots: false,
     nav: false,
     navText: [
         ("<img src='images/arrow1.png' />"),
         ("<img src='images/arrow2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 1,
             margin: 0,
         },
         1000:{
             items: 1
         }
     }
 });

 //ham bar menu js

 function addmenu(){
  var item = document.getElementById('ham_menu');
   item.classList.add('active_menu');
 }
 function close_menu(){
   var item = document.getElementById('ham_menu');
   item.classList.remove('active_menu');
 }

 function open_sub_menu(){
   var inneritem = document.getElementById('ham_menu_inner');
   inneritem.classList.add('active_menu');
 }
 function close_sub_menu(){
  var inneritem = document.getElementById('ham_menu_inner');
  inneritem.classList.remove('active_menu');
 }

 //gallery_image_permission

 function permission(){
   console.log('hello');
   var step2 =document.getElementById('verify_step2');
   step2.style.top='0'; step2.style.visibility='visible';
   var step1=document.getElementById('verify_step1');
  step1.style.top='-100%';  step1.style.visibility='hidden';
 }
 function permitted(){
   var img = document.getElementById('g_img1');
  img.style.top='0';  img.style.visibility='visible';
   var step2 =document.getElementById('verify_step2');
  step2.style.top='-100%';  step2.style.visibility='hidden';
 }
 function notPermitted(){
   var firstPage =document.getElementById('verify_step1');
   firstPage.style.top='0';  firstPage.style.visibility='visible';
   var step2 =document.getElementById('verify_step2');
  step2.style.top='-100%'; step2.style.visibility='hidden';
 }


 //video play 

 function videoPlay(){
   console.log('play');
   var imgItem = document.getElementById('video_image');
   imgItem.classList.add('img_display_none');

   var vdoItem = document.getElementById('video_play');
   vdoItem.classList.add('video_display');

   var vdoBx = document.getElementById('video_box');
   vdoBx.classList.add('vdo_banner_overlay');
 }

 var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  hashNavigation: {
    watchState: true,
    replaceState: true,
    },
    navigation: {
			nextEl: '.swiper-button-next1',
			prevEl: '.swiper-button-prev1',
		  },
      initialSlide: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    
  },
  pagination: {
    el: "",
  },
});

