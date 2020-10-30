const getRandomValue = (max, min) => Math.floor( Math.random() * (max - min) + min)



const app = Vue.createApp({
	data(){
		return {
			yourHealth: 100,
			monsterHelath: 100,
			currentRound: 0,
			result: null
		}
	},

	computed: {
		monsterBar(){
			return {width: this.monsterHelath + '%' };
		},
		yourBar(){
			return {width: this.yourHealth + '%'};
		},
		mayUseSpecialAttack(){
			return this.currentRound % 3 !== 0 
		}
	},

	watch: {
		monsterHelath(value){
			if (value <= 0 && this.yourHealth <= 0 ) {
				this.result = 'draw';
			} else if (value <= 0) {
				this.result = 'player';
			}
		},

		yourHealth(value){
			if (value <= 0 && this.monsterHelath <= 0 ) {
				this.result = 'draw';
			} else if (value <= 0) {
				this.result = 'monster';
			}
		}
	},

	methods:{
		attackMonster(){
			this.currentRound ++
			const attackValue = getRandomValue(12,5)
			this.monsterHelath -= attackValue
			this.attackYou()
		},
		attackYou(){
			const attackValue = getRandomValue(15,8)
			this.yourHealth -= attackValue
		},
		specialAttack(){
			this.currentRound ++
			const attackValue = getRandomValue(20,10)
			this.monsterHelath -= attackValue
		}, 
		healValue(){
			const healValue = getRandomValue(20,8)
			if (this.yourHealth + healValue > 100) {
				this.yourHealth = 100
			} else {
				this.yourHealth += healValue
			}
			this.attackYou()
		}
	}
})

app.mount('#game')