var collapseButton = document.getElementById('app-navbar-collapse');
collapseButton.addEventListener('click',function(e) {
    console.log(e.target);
    var navbar = document.getElementById('main-nav');
    if(navbar.classList.contains('in')) {
        navbar.classList.remove('in');
        // navbar.classList.add('expand');
    } else {
        // navbar.classList.remove('expand');
        navbar.classList.add('in');
    }
});

