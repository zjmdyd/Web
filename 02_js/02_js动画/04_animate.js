function getStyle (el, property) {
	if (getComputedStyle) {
		return getComputedStyle(el)[property];
	}else {
		return el.currentStyle[property];
	}
}

function animate(el, propertys) {
	let count = Object.keys(propertys).length;
	console.log('count = ' + count)
	el.timer = setInterval(function() {
		var index = 0;
		for (var property in propertys) {
			var current;
			var target = propertys[property]
			if (property === 'opacity') {
				current = Math.round(parseFloat(getStyle(el, property)) * 100);		//	把数四舍五入为最接近的整数
			}else {
				current = parseInt(getStyle(el, property));
			}
			var speed = (target - current) / 30;
			console.log('target = ' + target)
			console.log('current = ' + current)
			console.log('speed = ' + speed)
			if (speed == 0) {
				console.log('index = ' + index + ' count = ' + count)
				if (index == count-1) {
					clearInterval(el.timer);
					console.log('清除timer')
				}else {
					index++;
					console.log("index = " + index)
				}
			}else {
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			}

			if (property === 'opacity') {
				el.style[property] = (current + speed)/100;
			}else {
				el.style[property] = current + speed + 'px';
			}
		}
	}, 20);
}
