Vue.createApp({
	data(){
		return{
			counter: 0,
			five: 0,
			one: 0
		}
	},
	computed: {
		resultado(){
			if (this.counter < 37) {
				return 'Not there yet'
			} else if (this.counter > 37) {
				return 'Too Much!'
			} else{
				return this.counter
			}
		}
	},

	watch: {
		resultado(){
			setTimeout( () => {this.counter = 0}, 5000)
		}
	},

	methods: {
		sum5(num){
			this.counter = this.counter + num
		},
		sum1(num){
			this.counter = this.counter + num
		}
	}
}).mount('#assignment')