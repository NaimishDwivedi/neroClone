function time1(){
    var a = 0
    setInterval(function()
    { 
        a = a+ Math.floor(Math.random()*5 ) 
        if(a<100){
            document.querySelector(".statistics .lower .achievement .h11").innerHTML = a
        }
        else{
        document.querySelector(".loader h1").innerHTML = "100"
        }
        // console.log(a)     //execute at the interval of 1 seconds 
    

    },150)
}

time1()
function time2(){
    var a = 0
    setInterval(function()
    { 
        a = a+ Math.floor(Math.random()*18 ) 
        if(a<1000){
            document.querySelector(".statistics .lower .achievement .h12").innerHTML = a
        }
        else{
        document.querySelector(".loader h1").innerHTML = "1000"
        }
        // console.log(a)     //execute at the interval of 1 seconds 
    

    },150)
}

time2()
function time3(){
    var a = 0
    setInterval(function()
    { 
        a = a+ Math.floor(Math.random()*3 ) 
        if(a<50){
            document.querySelector(".statistics .lower .achievement .h13").innerHTML = a
        }
        else{
        document.querySelector(".loader h1").innerHTML = "50"
        }
        // console.log(a)     //execute at the interval of 1 seconds 
    

    },150)
}

time3()


const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
        delay:3000,
        disableOnInteraction:true,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });





function showSidebar(){
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "flex"
}

function closeSidebar(){
    const closesidebar = document.querySelector(".side-bar");
    closesidebar.style.display = "none"
}



const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
const darkmode = new Darkmode(options);
darkmode.showWidget();



var tl = gsap.timeline()




tl.from(".menu-bar ",{
    // transform :"translate : -100%",
    transform:"translateX(-200%)",
    duration:0.2,
    delay:0.2


})

// tl.from(".nav , .nav .nav-menu p",{
//     y:-200,
//     // duration:0.5,
//     // delay:0.5,
//     stagger:0.1,
//     scrub:2

// })
// tl.from(".details span",{
//     opacity:0,
//     scale:2

// })