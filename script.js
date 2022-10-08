// ---Burger
const toggleLink=document.querySelector('#toggle-link');
const nav=document.querySelector('.nav');
const burger=document.querySelector('.burger');
toggleLink.addEventListener('click', function(e){
	e.preventDefault;
	nav.classList.toggle('show');
	burger.classList.toggle('active');
});