// Tạo class hovered khi chọn vào list item
let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) =>
        item.classList.remove('hovered')
    );
    this.classList.add('hovered');
}

list.forEach((item) =>
    item.addEventListener('mouseover', activeLink)
);

//Toggle-menu 
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let img = document.querySelector('.logo-link img');

toggle.onclick = function() {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    img.classList.toggle('active');

}