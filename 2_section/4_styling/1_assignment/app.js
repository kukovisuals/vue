const app = Vue.createApp({
	data(){
		return {
			className: '',
			userA: false,
			userB: false,
			act: false,
			myColor: ''
		}
	},
	computed: {
		nameClasses(){
			if (this.className == 'a') {
				return {user1: this.userA}
			} else if (this.className == 'b') {
				return {user2: this.userB}
			}
		},
		showHide(){
			return {hidden: this.act}
		},

		dynamicColor(){
			return this.myColor
		}
	},
	methods: {
		setName(e){
			this.className = e.target.value
			if (this.className === 'a') {
				this.userA = !this.userA
			} else if (this.className === 'b') {
				this.userB = !this.userB
			}
		},

		activar(){
			this.act = !this.act
		},

		typeColor(e){
			this.myColor = e.target.value
		}
	}, 
})

app.mount('#assignment')