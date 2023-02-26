const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//On stocke les variables nécessaifres
const prevSlide = document.querySelector(".arrow_left");
const nextSlide = document.querySelector(".arrow_right");
let slidesCount = slides.length - 1;
let number = 0;
let dots = document.querySelectorAll(".dot");
console.log(dots);

//prevSlide.addEventListener("click", changeSlide(-1));
//nextSlide.addEventListener("click", changeSlide(1));

//Sans action, on chage de slide toutes les 3 secondes
let intervalId = setInterval("changeSlide(1)", 3000);

//On crée la fonction qui permet de changer de slide (prev/next)
function changeSlide(direction) {
	clearInterval(intervalId);
	number = number + direction;
	if (number > slidesCount) number = 0;
	if (number < 0) number = slidesCount;
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[number].image;
	document.querySelector("#banner p").innerHTML = '<p>' + slides[number].tagLine + '</p>';
	dots.forEach(function(dot){
		dot.classList = "dot";
	});
	dots[number].classList = "dot dot_selected";
	intervalId = setInterval("changeSlide(1)", 3000);
}