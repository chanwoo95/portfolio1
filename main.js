// 토글 버튼눌렀을 때 네비게이션바 보이기

const toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('visible');
});

// 메뉴 클릭 시 해당 메뉴로 이동

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }

    console.log(event.target.dataset.link);

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
});

// contact me 클릭 시 contact 화면으로 이동

const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', () => {
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
});

// arrow-up 버튼 클릭 시 화면 최상단으로 이동

const arrowUpBtn = document.querySelector('.arrow-up');

arrowUpBtn.addEventListener('click', () => {
    const scrollTo = document.querySelector('#home');
    scrollTo.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
});

// 최상단 화면에서 홈 화면 밑으로 내려갈 시 희미해짐

// 1. 홈 화면 높이 계산
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

// 2. 홈화면보다 작아지면 투명도 희미

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 최상단 화면에서 밑으로 스크롤 시 네비게이션 바 고정

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//  일정이상 밑으로 화면 스크롤 시 arrow-up버튼 활성화

document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight) {
        arrowUpBtn.classList.add('visible');
    } else {
        arrowUpBtn.classList.remove('visible');
    }
});

// 1. 모든 섹션 요소들과 네비게이션 아이템을 받아옴
// 2. IntersectionObserver을 통해서 관찰
// 3. 해당 메뉴 스크롤 시 메뉴 활성화1

const sectionIds = ['#home', '#about', '#skill', '#project', '#contact'];

let sectionNavItem = [navItems[0]];

const navItems = sectionIds.map((id) =>
    document.querySelector(`[data-link="${id}"]`),
);

const sections = sectionIds.map((id) => document.querySelector(id));

const observerOptions = {
    root: null,
    rootMargin: '0px',
    treshold: 0.4,
};

const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));
