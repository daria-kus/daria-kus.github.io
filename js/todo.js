//import { createApp } from "vue";

const appV = Vue.createApp({
  data() {
    return {
      inputValue: '',
      todos: []
    };
  },
  methods: {
    getToDo(event) {
      this.todo = event.target.value;
    },
    addToDo() {
      if (this.inputValue === '') {
        alert("Please write your to do")
      } else {
      this.todos.push(this.inputValue);
      }
    },
    removeToDo(idx){
      this.todos.splice(idx, 1);
    }    
  }
})

appV.mount('.list');

 const rename = document.querySelector('.list__rename'),
      newToDo = document.querySelector('.newtd'),
      listEL = document.querySelector('ul');
var   inputValue = document.querySelector('input');

rename.addEventListener('click', () => {
    document.querySelector('.list__title').innerHTML = window.prompt();
});
