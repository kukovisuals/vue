# 1. Interpolation

Interpolation is between double brackets ei. `<p>{{ data_value }} <p/>`

## Data Bind 

`<a v-bind:attribute = "dataValue"/>`

## Event Listener

`<button v-on:click="add(5)" />` 

**In Vue** 

```js
methods: {
 add(num){
  this.counter = this.counter + num
 }
}
 ````
 `<input type='text' v-on:input="setName (or setName(value) will work too ) " >`

**in Vue**
 
```js	
data(){
 return{
  name: ''
 }
},
methods: {
 setName(e){
  this.name = e.target.value
 }
}
```

## Event modifiers

`<form v-on:submit.prevent="submittedForm"/>`

```js
data(){
 return{
  name: ''
 }
},

methods: {
 submittedForm(){
  alert("Submitted")
 }
}
```

## Display once a value and don't updated 			

`<p v-once> {{ counterOnce }} </p>`

## Model

`v-model` is a two way binding it listens to input coming one way and output ( data-binding & event handling)

```js
methods:{ 
 outputFullName() {
  return this.name + ' ' + 'Lastname'
 }
}
```

## methods 

Use for event bindings

## computed 

Use with data-binding

	- Vue is aware of the computed properties
	- Wants an object and you define a bunch of methods
	- only use methods if you want to recalculate a value 

In the HTML file **point** to it ("method") Vue uses it like properies

```js
computed: {
	methodName(){
		return this.name + ' ' + this.lastname
	}
}
````

## watch 

Keep track of properties constantly, where you can read the current value of the propety on time 

	ie -> send HTTP request
	- whenever a propery in data(){} changes it re-executes
	- Wants an object 

```js
data(){
	name: '',
	counter: 0
},

watch: {
	name(value) {
		this.fullname = value + ' ' + 'Lastname'
	},
	counter(value){
		if(value > 50 ){
			this.counter = 0
		}
	}
}
```

## Shortcuts

v-on = @    
example `@click="add(10)"`

v-bind = "..."
ex: `:value="..."`


## Styling  

	:style = "{borderColor: boxASelected? 'red' : '#ccc'}"

	:class="boxASelected ? 'demo active' : 'demo' " 

	class="demo" 
	:class="{active: boxASelected} " 

For adding classes in an array form

	:class="['demo', {active: boxBSelected}] "

Adding classes dynamically, where the first value is a class and it checks if a condition is true from the **vue** __app.js__ file

	 :class = "{'log--player' : log.actionBy == 'player', 'log--monster' : log.actionBy == 'monster' }"


# Rendering Conditional Content & List 

conditional attributes in vue is the same as the if statement in javaScript

`<p v-if="goals.length === 0" > some text </p>`

```js
const app = Vue.createApp({
  data() {
    return { goals: [] };
  },
});
```
We could also add an input text and it to the `goals` property

```js
const app = Vue.createApp({
  data() {
    return { 
    	enteredGoalValue: '',
    	goals: [] 
    };
  },
  methods: {
  	addGoal(){
  		this.goals.push(this.enteredGoalValue)
  	}
  }
});
````

```html
<input type="text" v-model="enteredGoalValue"/>
<button @click="addGoal">Add Goal</button>
<p v-if="goals.length === 0">some text</p>
```

you could also add `v-else and v-else-if="goals.length > 0"` right after a child element starting from `v-if`

###### v-show 

Use `v-show` when an element is changing constantly between hidden and showing

```html
<p v-if="goals.length === 0">some text</p>
<ul v-show="goals.length > 0">
	<li>Goal</li>
</ul>
```

It works the same way as `v-if and v-else` the difference is that `v-show` hides the elements with **CSS** where as `v-if` removes the element completely from the **DOM**

###### v-for

works the same as an in for loop in javaScript ei. `for(const goal in goals)`
in Vue will be `v-for="goal in goals"` put it all together:

`<li v-for="goal in goals">{{ goal }}</li>`

To view the index of the for loop:

`<li v-for="(goal, i) in goals">{{ goal }} - {{ i }}</li>`

Displaing Objects:

`<li v-for="(value, key, i) in {name:'Fretz', cash:1532132}"> {{i}} - {{key}}: {{value}} </li>`

Displaying a number of defined elements:

`<li v-for="num in 10">{{ num }}</li>`

###### Removing Elements 

For removing elements from an array the same index name has to be used in the `@click` attribute

```html
<li v-for="(goal, i) in goals" @click="removeEl(i)">{{ goal }} - {{ i }}</li>
```

```js
methods: {
	addGoal(){
		this.goals.push(this.enteredGoalValue)
	},
  removeEl(index){
    this.goals.splice(index, 1)
  }
}
```

###### :key

Keep the same key index adding the `:key` keyword

```html
<li v-for="(goal, i) in goals" :key="goal" @click="removeEl(i)">
	<p> {{ goal }} - {{ i }} </p>
  <input type="text" @click.stop>
</li>
```


#### Notes

###### Random number between 2 values

	`Math.floor(Math.random() * (max - min ) + min)`


## ref

When ever you want to store a value a retrieve it whenever you need it 

```html
<input ref="someText" /> 
```

```js
methods:{
	someInput(){
		this.message = this.$refs.someText.value
	}
}
````








