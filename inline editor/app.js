const buble = document.querySelector('.tooltip');
const h1 = document.querySelector('h1');
buble.style.transform = `translate(${h1.offsetLeft-170}px, ${h1.offsetTop-125}px)`;

new Vue({
	el: "#app",
	data: {
		buble: false,
		content: "Edit Me"
	},
})
// getBoundingClientRect()
// untuk mengetahui position element