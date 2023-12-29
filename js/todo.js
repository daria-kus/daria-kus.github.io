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
    removeToDo(){
      this.todos.pop();
    }    
  }
})

appV.mount('.list');

/* const rename = document.querySelector('.list__rename'),
      newToDo = document.querySelector('.newtd'),
      listEL = document.querySelector('ul');
var   inputValue = document.querySelector('input');

rename.addEventListener('click', () => {
    document.querySelector('.list__title').innerHTML = window.prompt();
});

function addToDo () {
    const enteredValue = inputValue.value,
          newEl = document.createElement('li');
    newEl.textContent = enteredValue;
    listEL.appendChild(newEl);
    inputValue = '';
}

newToDo.addEventListener('click', addToDo); */


/* const buttonEL = document.querySelector('.newtd'),
      inputEl = document.querySelector('input'),
      listEL = document.querySelector('ul');

let listCheck = document.createElement('input'),
    label = document.createElement('label');

listCheck.type='checkbox';
listCheck.name='itemCheck';
listCheck.value='value';
listCheck.id='id';
label.htmlFor = 'id';
label.appendChild(document.createTextNode(inputEl.value));

function addGoal () {
//    const enteredValue = inputEl.value;
//    const listItemEl = document.createElement('input');
//    listItemEl.textContent = enteredValue;
let listCheck = document.createElement('input'),
    label = document.createElement('label');

listCheck.type='checkbox';
listCheck.name='itemCheck';
listCheck.value='value';
listCheck.id='id';
label.htmlFor = 'id';
label.textContent = inputEl.value;
    listEL.appendChild(listCheck);
    listEL.appendChild(label);
    listEL.appendChild(document.createElement('br'));
    inputEl.value = '';
}

buttonEL.addEventListener('click', addGoal);


function removeToDo () {
        var doc = document.querySelectorAll('input');
        doc.forEach(x => {
         if(x.querySelector('input').checked){
           x.remove()
         }
        }) 
};
 */

/* function createItem(text){
    const container = document.createElement('div');
    container.className = 'item'
    container.innerHTML = `<input type="checkbox" /><span>${text}</span>`
    return container;
  }
  
  function add() {
//--     var myDiv = document.getElementById("myDiv");
  
     var inputValue = document.getElementById("myInput").value;
  
     // creating checkbox element 
//--     var checkbox = document.createElement('input');
     if (inputValue === '') {
        alert("Input is Empty!");
     } else {
        document.getElementById("myUL").appendChild(createItem(inputValue));
     }
  }
  
  function remove() {
     var doc = document.querySelectorAll('.item');
     doc.forEach(x => {
      if(x.querySelector('input').checked){
        x.remove()
      }
     })
  } */