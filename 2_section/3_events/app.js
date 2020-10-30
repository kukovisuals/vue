const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    submitForm(){
      alert("Form Submitted baby love!")
    },
    setName(e){
      this.name = e.target.value
    },
  	add(num){
  		this.counter = this.counter + num
  	},
  	reduce(num){
  		this.counter = this.counter - num
  	}

  }
});

app.mount('#events');
