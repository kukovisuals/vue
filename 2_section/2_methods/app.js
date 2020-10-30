// controll HTML with a vue app
const app = Vue.createApp({
	data() {
		// it return always an obj
		return {
			courseGoalA: 'You need to learn how to damage her pussy',
			courseGoalB: 'You killed her pussy good job!',
			vueLink: 'http://fretzcastano.com/'
		};
	},
	methods: {
		outputGoal(){
			const randomOutput= Math.random();
			if (randomOutput < 0.5) {
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		}
	}
})

// it should hold an html selector
app.mount('#user-goal')
