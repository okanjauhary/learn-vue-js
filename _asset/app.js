new Vue({
	el : '#app',
	data: {
		show	: [],
		message : "Hello World!",
		name	: "Sulhan",
		nilaiA	: 5,
		nilaiB	: 10,
		plusResult : null,
		// v-model menangkap event change
		kilometer: null,
		meter: null
	},
	computed: {
		sumAB	: function() {
			return this.nilaiA + this.nilaiB;
		}
	},
	// methods -> berisi fungsi dari event
	methods: {
		plus : function(a, b) {
			return this.plusResult = a + b;
		}
	},
	// watch -> menangkap event change / event yang sedang berlangsung
	watch: {
		kilometer: function(val) {
			this.meter = val * 1000;
		},
		meter: function(val) {
			this.kilometer = val / 1000;
		}
	}
});