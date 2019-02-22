// Interactivity demo 1

var bgColor = document.querySelector('.bg-color')
var body = document.querySelector('body')
var image1 = document.querySelector('.image-1')
var image2 = document.querySelector('.image-2')

bgColor.addEventListener ('click', invert)

function invert() {
	body.classList.toggle('invert')
	if (image1.style.display == 'block') {
		image1.style.display = 'none'
		image2.style.display = 'block'
	} else {
		image2.style.display = 'none'
		image1.style.display = 'block'
	}
}



//Greeting
var greeting = document.querySelector('.greeting')
var list = ['Save The Waves', 'Bring Back Blue', 'Save Our Oceans']
var count = 0

function newGreeting() {
	greeting.textContent = list[count]
	if (count < list.length - 1) {
		count++
	} else {
		count = 0
	}
	setTimeout(newGreeting, 1000)
}

setTimeout(newGreeting, 1000)






//Fern
var fern = document.querySelector('.content img')
var toggle = document.querySelector('.toggle')

toggle.addEventListener('click', focus)

function focus(e) {
	e.preventDefault()
	fern.classList.toggle('focus')
}
