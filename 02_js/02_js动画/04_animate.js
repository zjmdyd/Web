function getStyle (el, property) {
	if (getComputedStyle) {
		return getComputedStyle(el)[property];
	}else {
		return el.currentStyle[property];
	}
}

function animate(el, propertys) {
	clearInterval(el.timerId);

	el.timerId = setInterval(function() {
		for (var property in propertys) {
		var current;
		var target = propertys[property]
		if (property === 'opacity') {
			current = Math.round(parseFloat(getStyle(el, property)) * 100);
		}else {
			current = parseInt(getStyle(el, property));
		}
		var speed = (target - current) / 30;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if (property === 'opacity') {
			el.style[property] = (current + speed)/100;
		}else {
			el.style[property] = current + speed + 'px';
		}
	}

		
	}, 20);
}