
// Navbar Collapse And Close On Click Start
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

document.querySelectorAll(".nav-bar li").forEach(element =>{
    element.addEventListener("click",function(){
        navBar = document.querySelector(".nav-bar");
        navBar.classList.remove("active");
    })
});

window.addEventListener('click', function(e){
    if(!this.document.querySelector(".nav-bar").contains(e.target) && (!this.document.querySelector(".hamburger").contains(e.target))){
        navBar.classList.remove("active");
    }
});
// Navbar Collapse And Close On Click End



// PDM Map Pop Up START
document.querySelectorAll('#pdmlogo').forEach (image => {
    image.onclick = () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').getElementsById = ('#pdmlogo2');
    }
});
  
    document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};
// PDM Map Pop Up END