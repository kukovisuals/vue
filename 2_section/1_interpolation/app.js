// controll HTML with a vue app
const app = Vue.createApp({
	data() {
		// it return always an obj
		return {
			courseGoal: 'Finish the course and learn vue',
			vueLink: 'http://fretzcastano.com/'
		};
	}
})

// it should hold an html selector
app.mount('#user-goal')
