const getRandomValue = (max, min) => Math.floor( Math.random() * (max - min) + min)



const app = Vue.createApp({
	data(){
		return {
			yourHealth: 100,
			monsterHelath: 100,
			currentRound: 0,
			result: null,
			logs:[]
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
				this.monsterHelath = 0
				this.result = 'player';
			}
		},

		yourHealth(value){
			if (value <= 0 && this.monsterHelath <= 0 ) {
				this.result = 'draw';
			} else if (value <= 0) {
				this.yourHealth = 0
				this.result = 'monster';
			}
		}
	},

	methods:{

		restart(){			
			this.yourHealth = 100
			this.monsterHelath = 100
			this.currentRound = 0
			this.result = null
			this.logs = []
		},
		attackMonster(){
			this.currentRound ++
			const attackValue = getRandomValue(12,5)
			this.gameLog('monster','attack', attackValue)
			this.monsterHelath -= attackValue
			this.attackYou()
		},
		attackYou(){
			const attackValue = getRandomValue(15,8)
			this.gameLog('player','attack', attackValue)
			this.yourHealth -= attackValue
		},
		specialAttack(){
			this.currentRound ++
			const attackValue = getRandomValue(20,10)
			this.gameLog('monster','attack', attackValue)
			this.monsterHelath -= attackValue
		}, 
		healValue(){
			const healValue = getRandomValue(20,8)
			if (this.yourHealth + healValue > 100) {
				this.yourHealth = 100
			} else {
				this.gameLog('player','heal', healValue)
				this.yourHealth += healValue
			}
			this.attackYou()
		},
		surrenda(){
			this.result = 'monster'
		},
		gameLog(player, type, value){
			this.logs.unshift({
				actionBy: player,
				actionType: type,
				actionValue: value
			})
		}
	}
})

app.mount('#game')