new Vue({
	el : "#app",
	data : {
		posX : null,
		posY : null,
		trans: "display: none",
		color: {
			'red' : true,
			'blue': false
		},
		title: {
			color : 'blue',
			backgroundColor: 'red',
		}
	},
	methods : {
		pointer: function(e) {
			let x = e.clientX;
			let y = e.clientY;
			this.posX = x;
			this.posY = y;
			if(x < 50 ){
				this.trans = "transform: translate(" + (x+30) + "px," + y + "px)";
			}else if(y < 40){
				this.trans = "transform: translate(" + (x-60) + "px," + (y+40) + "px)";
			}else if(x > (window.innerWidth - 81)){
				this.trans = "transform: translate(" + (x-160) + "px," + y + "px)";
			}else{
				this.trans = "transform: translate(" + (x-60) + "px," + (y-50) + "px)";
			}
		},
		toggleClass: function() {
			if(this.color.red){
				this.color.blue = true;
				this.color.red = false;
			}else{
				this.color.blue = false;
				this.color.red = true;
			}
		}
	}
});