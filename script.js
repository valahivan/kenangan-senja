// Toggle class sidebar

const navbarNav = document.querySelector('.navbar-nav');
const bars = document.getElementById('bars');
bars.addEventListener('click', function(){
    navbarNav.classList.toggle('sideBar');
});

// Klik diluar sidbar untuk menghilangkan navbar

document.addEventListener('click', function(e){
    if(!bars.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('sideBar');
    }
});
