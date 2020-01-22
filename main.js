
var photoUrls = [
	"./img/slide1.jpg", 
	"./img/slide2.jpg", 
	"./img/slide3.jpg", 
	"./img/slide4.jpg"
];

var photos = document.querySelectorAll(".slider img");
console.log(photos);

photos.forEach(function(element, index){
	element.setAttribute("src", photoUrls[index]);
});

// FIRST FUNCTION - just simple slide show on 5 sec

// function changeSlide(){

// 	var pics = document.querySelectorAll(".slider img");
// 	var myPhoto = pics[0];
// 	pics[pics.length - 1].after(myPhoto);

// 	var thumbnails = document.querySelectorAll(".thumbnails span");

// 	thumbnails.forEach(function(element, index){
// 		if (pics[1].getAttribute("src") === photoUrls[index]) {
// 			element.classList.add("active");
// 		} else {
// 			element.classList.remove("active");
// 		}
// 	})


// }

// setInterval(()=>changeSlide(),5000);

// END OF FIRST FUNCTION


// SECOND FUNCTION - WITH BUTTONS

function switchSlider(someArrow) {

	if (!someArrow || someArrow.classList.contains("rightArrow")) {

		var mySlider = document.querySelector(".slider");
		
		mySlider.classList.add("show");

		var pics = document.querySelectorAll(".slider img");
		var myPhoto = pics[0];
		pics[pics.length - 1].after(myPhoto);

		mySlider.classList.remove("show");

	} else {

		var pics = document.querySelectorAll(".slider img");
		var myPhoto = pics[pics.length - 1];
		pics[0].before(myPhoto);

	}

	var firstPic = document.querySelector(".slider img");

	var thumbnails = document.querySelectorAll(".thumbnails span");

	thumbnails.forEach(function(element, index){
		if (firstPic.getAttribute("src") === photoUrls[index]) {
			element.classList.add("active");
		} else {
			element.classList.remove("active");
		}
	})
}

setInterval(()=>switchSlider(),5000);

var rightArrow = document.querySelector(".rightArrow");
rightArrow.addEventListener("click", ()=> switchSlider(rightArrow));

var leftArrow = document.querySelector(".leftArrow");
leftArrow.addEventListener("click", ()=> switchSlider(leftArrow));
