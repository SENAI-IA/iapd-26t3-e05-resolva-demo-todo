import {
  addTodo,
  createTodo,
  filterTodos,
  removeTodo,
  toggleTodo,
  type Todo,
  type TodoFilter,
} from "./todo.js";
import "./style.css";

let todos: Todo[] = [];
let nextId = 1;

const form = document.querySelector<HTMLFormElement>("#todo-form");
const titleInput = document.querySelector<HTMLInputElement>("#todo-title");
const list = document.querySelector<HTMLUListElement>("#todo-list");
const count = document.querySelector<HTMLSpanElement>("#todo-count");
const emptyState = document.querySelector<HTMLParagraphElement>("#empty-state");
const formError = document.querySelector<HTMLParagraphElement>("#form-error");
const filter = document.querySelector<HTMLSelectElement>("#todo-filter");

if (!form || !titleInput || !list || !count || !emptyState || !formError || !filter)
  throw new Error("Interface incompleta.");

const todoList = list;
const todoCount = count;
const todoEmptyState = emptyState;
const todoFormError = formError;
const todoFilter = filter;
let selectedFilter: TodoFilter = "all";

function render() {
  const visibleTodos = filterTodos(todos, selectedFilter);
  todoList.replaceChildren(
    ...visibleTodos.map((todo) => {
      const item = document.createElement("li");
      item.className = "todo-item";
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => {
        todos = toggleTodo(todos, todo.id);
        render();
      });
      const text = document.createElement("span");
      text.textContent = todo.title;
      text.className = todo.completed ? "completed" : "";
      label.append(checkbox, text);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "remove-button";
      remove.textContent = "Remover";
      remove.addEventListener("click", () => {
        todos = removeTodo(todos, todo.id);
        render();
      });
      item.append(label, remove);
      return item;
    }),
  );
  const pending = todos.filter((todo) => !todo.completed).length;
  todoCount.textContent = `${pending} pendente${pending === 1 ? "" : "s"}`;
  todoEmptyState.textContent =
    todos.length === 0
      ? "Nenhuma tarefa cadastrada."
      : selectedFilter === "all"
        ? "Nenhuma tarefa cadastrada."
        : "Nenhuma tarefa corresponde a este filtro.";
  todoEmptyState.hidden = visibleTodos.length > 0;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (!title) {
    todoFormError.textContent = "Digite um título para criar a tarefa.";
    todoFormError.hidden = false;
    titleInput.focus();
    return;
  }
  try {
    todos = addTodo(todos, createTodo(`todo-${nextId++}`, title));
  } catch (error) {
    todoFormError.textContent = error instanceof Error ? error.message : "Não foi possível criar a tarefa.";
    todoFormError.hidden = false;
    return;
  }
  todoFormError.hidden = true;
  todoFormError.textContent = "";
  titleInput.value = "";
  render();
  titleInput.focus();
});

todoFilter.addEventListener("change", () => {
  selectedFilter = todoFilter.value as TodoFilter;
  render();
});

titleInput.addEventListener("input", () => {
  if (titleInput.value.trim()) {
    todoFormError.hidden = true;
    todoFormError.textContent = "";
  }
});

render();
