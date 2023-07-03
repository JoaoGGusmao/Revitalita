let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let user = document.querySelector('user')


searchBtn.onclick=function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.toggle('open');
    user.classList.add('hide')
}
closeBtn.onclick=function(){
    searchBox.classList.remove('active');
    searchBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
    user.classList.remove('hide')
}
menuToggle.onclick = function(){
    header.classList.toggle('open');
    searchBox.classList.remove('active');
    searchBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
    user.classList.remove('hide')
    
}

userRequire.onclick=function(){
        user.classList.toggle('open');
        }