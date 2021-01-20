// 토글 버튼눌렀을 때 네비게이션바 보이기

const toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('visible');
    
})

// 메뉴 클릭 시 해당 메뉴로 이동

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', event => {
    
    const target = event.target;
    const link = target.dataset.link;
    
    if( link == null ) {
        return;
    }
    

    console.log(event.target.dataset.link);

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:"smooth", block:"center"});
})


// contact me 클릭 시 contact 화면으로 이동


const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', () => {
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
})



// arrow-up 버튼 클릭 시 화면 최상단으로 이동

const arrowUpBtn = document.querySelector('.arrow-up');

arrowUpBtn.addEventListener('click', () => {
    const scrollTo = document.querySelector('#navbar');
    scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
})


// 최상단 화면에서 홈 화면 밑으로 내려갈 시 희미해짐


// 1. 홈 화면 높이 계산
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

console.log(homeHeight);
console.log(window.scrollY);

// 2. 홈화면보다 작아지면 투명도 희미

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - ( window.scrollY / homeHeight);
})