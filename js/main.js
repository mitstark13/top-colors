const image = document.getElementById('image');

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const height = canvas.height = image.naturalHeight || image.offsetHeight || image.height;
const width = canvas.width = image.naturalWidth || image.offsetWidth || image.width;

const newImage = new Image()
newImage.src = './img/iStock.jpg'

newImage.onload = () => {
	context.drawImage(newImage, 0, 0);
	const data = context.getImageData(0, 0, width, height);

	const length = data.data.length;

	let colors = {}

	let rgbR, rgbG, rgbB;

	for (let i = 0; i < length; i += 20) {
	    let color = data.data[i] + ', ' + data.data[i+1] + ', ' + data.data[i+2]
	    if (colors[color]) {
	    	colors[color] = colors[color] + 1
	    } else {
	    	colors[color] = 1
	    }
	}

	colors2 = Object.keys(colors).sort((a, b) => {return colors[b] - colors[a]})

	console.log(colors2)
	
	document.getElementById('1').setAttribute("style", "background-color: rgb(" + colors2[0]);
	document.getElementById('p1').innerHTML = colors2[0]
	document.getElementById('2').setAttribute("style", "background-color: rgb(" + colors2[1]);
	document.getElementById('p2').innerHTML = colors2[1]
	document.getElementById('3').setAttribute("style", "background-color: rgb(" + colors2[2]);
	document.getElementById('p3').innerHTML = colors2[2]
	document.getElementById('4').setAttribute("style", "background-color: rgb(" + colors2[3]);
	document.getElementById('p4').innerHTML = colors2[3]
	document.getElementById('5').setAttribute("style", "background-color: rgb(" + colors2[4]);
	document.getElementById('p5').innerHTML = colors2[4]


}