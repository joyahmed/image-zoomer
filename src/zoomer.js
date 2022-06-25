export const ZOOMER = (original, zoomed, lens, show) => {
	let image, result, cx, cy;
	image = document.getElementById(original);

	result = document.getElementById(zoomed);

	lens = document.getElementById(lens);

	if (show === true) {
		lens.setAttribute('class', 'image-zoom-lens');
		lens.style.position = 'absolute';
		lens.style.border = '1px solid #d4d4d4';
		lens.style.width = '90px';
		lens.style.height = '70px';
		lens.style.cursor = 'pointer';
	} else {
		lens.style.border = 'none';
	}

	cx = result.offsetWidth / lens.offsetWidth;
	cy = result.offsetHeight / lens.offsetHeight;

	result.style.backgroundImage = "url('" + image.src + "')";
	result.style.backgroundSize =
		image.width * cx + 'px ' + image.height * cy + 'px';

	const moveLens = e => {
		let pos, x, y;
		pos = getCursorPos(e);
		x = pos.x - lens.offsetWidth / 2;
		y = pos.y - lens.offsetHeight / 2;

		if (x > image.width - lens.offsetWidth) {
			x = image.width - lens.offsetWidth;
		}
		if (x < 0) {
			x = 0;
		}

		if (y > image.height - lens.offsetHeight) {
			y = image.height - lens.offsetHeight;
		}
		if (y < 0) {
			y = 0;
		}

		lens.style.left = x + 'px';
		lens.style.top = y + 'px';

		result.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px';
	};
	lens.addEventListener('mousemove', moveLens);
	image.addEventListener('mousemove', moveLens);

	lens.addEventListener('touchmove', moveLens);
	image.addEventListener('touchmove', moveLens);

	const getCursorPos = e => {
		let a,
			x = 0,
			y = 0;
		e = e || window.e;
		a = image.getBoundingClientRect();
		x = e.pageX - a.left;
		y = e.pageY - a.top;
		x = x - window.pageXOffset;
		y = y - window.pageYOffset;
		return {
			x: x,
			y: y
		};
	};
};
