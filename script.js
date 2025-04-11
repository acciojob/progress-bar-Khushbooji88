//your JS code here. If required.
let currentActive = 1;
const circle = 
	document.querySelectorAll('circle.');
const prevButton = doncument.getElementById('prev');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click', () =>{
	currentActive++;
	update();
});

function update(){
	circle.forEach((circle, index) =>{
		if(index < currentActive){
			circle.classList.remove('active');
		}
	});

	const progressLine = 
		document.querySelector('.progrees-line');
	onst activeCircles = 
		document.querySelector(',active');
	progressLine.style.width = 
		((activeCircles.length -1) / (circle.length -1))*100+'%';

	prevButton.disabled = currentActive === 1;
	nextButton.disabled = currentActive === circle.length;
	
}