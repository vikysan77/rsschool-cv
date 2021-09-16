const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// кнопка на начало страницы
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}





let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;


function changeCurrentItem(n){
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction){
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('active', direction);
    });
}

function showItem(direction){
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('next',direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function previousItem(n){
    hideItem('to-right');
    changeCurrentItem(n-1);
    showItem('from-left');
}

function nextItem(n){
    hideItem('to-left');
    changeCurrentItem(n+1);
    showItem('from-right');
}


document.querySelector('.control.left').addEventListener('click', function(){
    if (isEnabled){
        previousItem(currentItem)
    }
});


document.querySelector('.control.right').addEventListener('click', function(){
    if (isEnabled){
        nextItem(currentItem)
    }
});

