Vue.component('home', {
	template: '#home-view'
})

Vue.component('about', {
	template: '#about-view'
})

Vue.component('member', {
	props: ['members'],
	template: '#member-view',
})

new Vue({
	el: "#app",
	data: {
		view: "home",
		members: [
			{nama: "Paijo", alamat: "Blitar"},
			{nama: "Arjuna", alamat: "Kediri"},
			{nama: "Jauhary", alamat: "Malang"},
		]
	},
})