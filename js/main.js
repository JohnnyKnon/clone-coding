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
    navbarMenu.classList.remove('open');
   scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
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

//Show "arrow up" button when scrolling down

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeheight /2){
        arrowUp.classList.add('visible');
    } else{
        arrowUp.classList.remove('visible');
    }

});

// Handle Click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

// Projects

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; //Parent Node(부모를)를 받아와서 
    if(filter == null){
        return;
    }

    //Remove Selection from the previous item and select

    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');



    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => { //foreach = 배열 형태로 받아옴
            console.log(project.dataset.type);
    
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });      
        projectContainer.classList.remove('anim-out');
    }, 300);
    
});



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector); //scrollIntoView엘리멘트 의 부모 컨테이너로 스크롤되는 메소드
    scrollTo.scrollIntoView({behavior: "smooth"});
}