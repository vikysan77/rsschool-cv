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



const navbar = document.querySelector(".navbar");
navbar.querySelector(".toggle").addEventListener("click", () => {
  navbar.classList.toggle("collapsed");
});
window.addEventListener("scroll", e => {
  let windowY = window.pageYOffset;
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  if (windowY > navbarHeight) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});


console.log ('Самооценка CV - 155 \n 1)вёрстка валидная +10. \n 2)вёрстка семантическая +20 \n 3)теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. Заголовок h1 может быть только один. +20 \n4)для оформления СV используются css-стили +10 \n 5)контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10 \n 6)вёрстка адаптивная +10 \n7)есть адаптивное бургер-меню +10 \n 8)на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10 \n 9)контакты для связи и перечень навыков оформлены в виде списка ul > li +10 \n 10)CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10 \n 11)CV содержит пример вашего кода (например, решение задачи с сайта codewars) без подсветки +5 \n 12)CV выполнено на английском языке +10 \n 13)выполнены требования к PullRequest +10 \n 14)дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10 \n ');