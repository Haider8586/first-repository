let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
let crossBtn = document.querySelector('#close');
let cartBtn = document.querySelector('#cart');

function search_btn(){
   crossBtn.style.display='block';
   searchBtn.style.display='none';
   searchForm.style.display='block';
   searchForm.style.display='flex';
};
searchBtn.addEventListener('click', search_btn );
function close_btn(){
    crossBtn.style.display='none';
    searchBtn.style.display='block';
    searchForm.style.display='none';
 };
 crossBtn.addEventListener('click', close_btn );
 //search button color change
 function searchmouseIn(){
    searchBtn.setAttribute('src','images/yellow-search.svg');
}
function searchmouseOut(){
    searchBtn.setAttribute('src','images/white-search.svg');
}
searchBtn.addEventListener('mouseover', searchmouseIn);
searchBtn.addEventListener('mouseout', searchmouseOut);
//cart btn color changer
function cartmouseIn(){
    cartBtn.setAttribute('src','images/yellow-cart.svg');
}
function cartmouseOut(){
    cartBtn.setAttribute('src','images/white-cart.svg');
}
cartBtn.addEventListener('mouseover', cartmouseIn);
cartBtn.addEventListener('mouseout', cartmouseOut);
// navbar media query display
function sidemenuBar(){
let menuBtn = document.getElementById("menubtn");
let menuClose = document.getElementById("menuClose");
let nav = document.getElementById("navbar");
if(menuBtn){
    menuBtn.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(menuClose){
    menuClose.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
}
sidemenuBar();