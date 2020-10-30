Vue.createApp({
	data() {
		return {
			name: 'Fretz Castano',
			age: 29,
			imgUrl: 'http://needscollective.com/images/portfolio/grid/08.jpg'
		};
	},
	
	methods: {
			randomNumber() { 
				const num = Math.random()
				return num
		}
	} 
}).mount('#assignment')