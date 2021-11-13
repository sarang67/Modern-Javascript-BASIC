import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
    <div class="todos">
         <div class="todos-header">
            <h3 class="todos-title">Todo List</h3>
            <div>
            <p>You have <span class="todos-count"></span>Items</p>
            <button type="button" class="todos-clear" style="display:none"></button>
            </div>
         </div>
         <form class="todos-form" name="todos">
           <input type="text" placeholder ="what is next item ?" name="todo" />
           <ul class="todos-list">
           </ul>
         </form>
    </div>
`;

/*
Assignment
=============
5) update state using event delegation  for checkbox

hint :-

    todosString += `
      <li data-id="${index}" ${todo.complete ? " class='todos-complete'" : ""}>
        <input type="checkbox" ${todo.complete ? " checked" : " "}/>
        <span>${todo.label}</span>
        <button type="button"></button>
      </li>
    `;



6) delete select items

7) Ui state clear filter:- 
enable the clear button , one once you click , this will only show the unchecked list items.

8) use localstorage  for persisting data , data shoudl not be dele

*/


//  state initilization and add functinality

// state
let todos = [];

//1 selctor
const root = document.querySelector(".todos");
const list = root.querySelector(".todos-list");

const form = document.forms.todos;
const input = form.elements.todo;

// 3 functions

function renderTodos(todos) {
  let todosString = ``;

  todos.forEach((todo, index) => {
    todosString += `
      <li data-id="${index}"  />
       <input type="checkbox" />
       <span class="todos-clear">${todo.label}</span>
       <button type="button"></button>
      </li>
    `;
  });
  console.log(todosString);
  console.log("---------------------------");

  list.innerHTML = todosString;
}

function addTodo(event) {
  event.preventDefault();

  const label = input.value.trim();
  const complete = false;

  todos = [...todos, { label, complete }];

  renderTodos(todos);
  //console.log(todos);
  input.value = "";
}

//2 initilization
function init() {
  form.addEventListener("submit", addTodo);
}

init();
