function castParallax() {
	window.addEventListener("scroll", function(event){

		var top = this.scrollY;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = (top * speed / 100);
			if (yPos >= 215) {
				yPos = 215
			}
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});
}

document.body.onload = castParallax();