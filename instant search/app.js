Vue.filter('harga', function(price) {
	return "Rp. " + price.toFixed(2);	
});

new Vue({
	el: "#app",
	data: {
		barang: [
			{name: "Black Coffee", price: 3000, active: false, checked: false},
			{name: "Green Coffee", price: 6500, active: false, checked: false},
			{name: "Coffee Latte", price: 8000, active: false, checked: false},
			{name: "Cappuccino", price: 4000, active: false, checked: false},
			{name: "Coffee milk", price: 4500, active: false, checked: false},
			{name: "Cross Coffee", price: 3500, active: false, checked: false},
			{name: "Arabica Coffee", price: 3500, active: false, checked: false},
			{name: "Coffee Tubruk", price: 3500, active: false, checked: false},
		],
		search: ''
	},
	computed: {
		dataProsessed(){
			let src = this.search.trim().toLowerCase()

			if(!this.search.length){
				return this.barang
			}

			return this.barang.filter(function(data) {
				if(data.name.toLowerCase().indexOf(src) != -1){
					return data
				}
			})
		},

		total() {
			let total = 0
			this.barang.forEach(function(data){
				if(data.checked){
					total += data.price
				}
			})

			return total
		}
	}
	
})