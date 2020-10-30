Vue.createApp({
	data(){
		return{
			name: '',
			out: '',
			alertz: 'Aprenda esto Rapido!'
		};
	},
	methods: {
		alerta(){
			alert(this.alertz)
		},
		pressedEnter(e){
			if (e.keyCode === 13) {
        alert('Enter was pressed');
        this.out = e.target.value
      } 
		},
		setName(e){
			this.name = e.target.value
		},
		noop() {

		}
	}
}).mount('#assignment')