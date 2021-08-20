'use strict';


// Make Navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{ // 클릭한 이벤트 추가
    const target = event.target; //target (눌렀을때에 해당 타겟에 이벤트)
    const link = target.dataset.link; //눌려진 타켓에 링크 값
    if(link == null){
        return;
    }
   scrollIntoView(link);
});

// Handle Click on "Contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', ()=> {
    scrollIntoView('#contact')
});

// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeheight;
});



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector); //scrollIntoView엘리멘트 의 부모 컨테이너로 스크롤되는 메소드
    scrollTo.scrollIntoView({behavior: "smooth"});
}