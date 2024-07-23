// header toogle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})


//typing effect
let typed = new Typed('.auto-input',{
    strings: ['Student','freelancer','graphic designer'],
    typespeed: 100,
    backspeed: 100,
    backdelay: 2000,
    loop: true
})