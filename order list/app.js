Vue.filter('harga', function(price) {
	return "Rp. " + price.toFixed(2);	
});

new Vue({
	el: "#app",
	data: {
		barang: [
			{name: "Black Coffee", price: 3000, active: true},
			{name: "Green Coffee", price: 6500, active: true},
			{name: "Coffee Latte", price: 8000, active: false},
			{name: "Cappuccino", price: 4000, active: false},
			{name: "Coffee milk", price: 4500, active: false},
			{name: "Cross Coffee", price: 3500, active: false},
		],
	},
	computed: {
		total(){
			let totalBarang = 0
			this.barang.forEach(function(barang){
				if(barang.active){
					totalBarang += barang.price
				}
			})

			return totalBarang
		}
	},
})