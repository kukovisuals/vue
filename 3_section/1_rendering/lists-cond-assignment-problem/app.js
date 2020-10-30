Vue.createApp({
	data(){
		return {
			inputText: '',
			list: [],
			show: true
		}
	},

	computed: {
		caption(){
			return this.show ? 'Hide List' : 'Show List'
		}
	},

	methods: {
		addText(){
			this.list.push(this.inputText)
		},
		lista(){
			this.show = !this.show
		}
	}
}).mount('#assignment')