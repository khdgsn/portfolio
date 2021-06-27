/* this js works */
let changeText = document.getElementById('text-change');

function colourChange() {
    changeText.style.color = 'white';
}

changeText.addEventListener('mouseover', colourChange)

/* open and close list */
let mommy = document.querySelector('#mom');


if(mommy) {
	// console.log(mommy);
    mommy.addEventListener("click", doThis, false);
 }


function doThis(e) {
	if(e.target !== e.currentTarget) {
		let clickedItem = e.target.id;
		// console.log(clickedItem);
		var title = document.getElementById(clickedItem+'-1');
		
		let titleCS = window.getComputedStyle(title);
		let titleDisplay = (titleCS.display);

		if(titleDisplay == 'none') {
			title.style.display = 'inline';
		} else {
			title.style.display = 'none';
		}
	}
}			






// function doThis(e) {
// 	if(e.target !== e.currentTarget) {
// 		let clickedItem = e.target.id;
// 		console.log(clickedItem);


// 		let state = document.getElementById(clickedItem+'-1').style.display;
// 		console.log(state);
// 		if(state == null) {
// 			state.style.display = 'inline';
// 		} 
// 		else {
// 			state.style.display = 'none';
// 		}
// 	}
// }