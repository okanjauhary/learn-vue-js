Vue.component('greeting', {
	template: '<span v-html="halo"></span>',
	data: function() {
		return {
			halo : "<i>Hello world!</i>"
		}
	}
});

Vue.component('coba', {
	props: ['says', 'boys'],
	template: `
		<ul>
			<li>{{ says }}</li>
			<li>{{ boys }}</li>
		</ul>
	`
});

new Vue({
	el : '#app',
	data: {
		imgUrl  : 'https://cdn.pixabay.com/photo/2014/10/07/18/20/women-478133_960_720.jpg',
		num		: true,
		genres	: ['Dangdut', 'Pop', 'Rock'],
		// untuk menampung dari input model inpGenre
		inpGenre: '',
		say: "<b>Hello World! ciss</b>",
		boy: "<i>Hello World! cuyy</i>",
		

	},
	methods : {
		ubah : function() {
			if(this.num){
				this.imgUrl = 'https://cdn.pixabay.com/photo/2018/07/12/02/32/basil-3532424__340.jpg';
				this.num = false;
			}else{
				this.imgUrl = 'https://cdn.pixabay.com/photo/2014/10/07/18/20/women-478133_960_720.jpg';
				this.num = true;
			}
		},
		addGenre : function(){
			if(this.inpGenre != ''){
				this.genres.push(this.inpGenre);
				this.inpGenre = '';
			}
		},
		addEnter: function() {
			this.genres.push(this.inpGenre);
			this.inpGenre = '';
		},
		delGenre : function(index){
			this.genres.splice(index, 1);
		}
	},
});
