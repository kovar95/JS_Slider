
var myImages = document.querySelectorAll(".gallery img");

var imgUrl = [
	"./imgGallery/image1.jpg",
	"./imgGallery/image2.jfif",
	"./imgGallery/image3.jpg",
	"./imgGallery/image4.jpg",
	"./imgGallery/image5.jpg",
	"./imgGallery/image6.jfif",
	"./imgGallery/image7.jpg",
	"./imgGallery/image8.jpg",
	"./imgGallery/image9.jpg",
	"./imgGallery/image10.jpg",
	"./imgGallery/image11.jpg",
	"./imgGallery/image12.jpg"
];

myImages.forEach((element, index)=> {
	element.setAttribute("src", imgUrl[index]);
})

var elementsForSwitching = [];

myImages.forEach((element)=> {

	element.addEventListener("click", ()=> {

		if (elementsForSwitching.length < 2 ) {

			elementsForSwitching.push(element);
			element.classList.add("change");

			if (elementsForSwitching.length === 2 ){

				var nextOfFirst = elementsForSwitching[0].nextSibling;
				var nextOfSecond = elementsForSwitching[1].nextSibling;

				setTimeout(()=>{

					nextOfFirst.before(elementsForSwitching[1]);
					nextOfSecond.before(elementsForSwitching[0]);
					elementsForSwitching[0].classList.remove("change");
					elementsForSwitching[1].classList.remove("change");

					elementsForSwitching = [];

				}, 800)
			}
		}
	})
})


// adding blink message

var myPasus = document.querySelector("p");

setInterval(()=> {
	myPasus.classList.toggle("blink");
}, 500)