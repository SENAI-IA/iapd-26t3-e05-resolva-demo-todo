import { describe, expect, it } from "vitest";
import {
  addTodo,
  createTodo,
  filterTodos,
  pendingTodos,
  removeCompletedTodos,
  removeTodo,
  toggleTodo,
  updateTodoTitle,
} from "../src/todo.js";

const firstTodo = createTodo("todo-1", "Estudar requisitos");
const secondTodo = createTodo("todo-2", "Executar testes");

describe("lista de tarefas", () => {
  it("cria tarefas sem espaços nas extremidades", () => {
    expect(createTodo(" todo-3 ", "  Revisar diff  ")).toEqual({
      id: "todo-3",
      title: "Revisar diff",
      completed: false,
    });
  });

  it("adiciona uma tarefa ao final da lista", () => {
    expect(addTodo([firstTodo], secondTodo)).toEqual([firstTodo, secondTodo]);
  });

  it("alterna a tarefa selecionada", () => {
    expect(toggleTodo([firstTodo, secondTodo], firstTodo.id)).toEqual([
      { ...firstTodo, completed: true },
      secondTodo,
    ]);
  });

  it("alterna somente o ID selecionado quando os títulos se repetem", () => {
    const repeated = [firstTodo, { ...secondTodo, title: firstTodo.title }];
    expect(toggleTodo(repeated, firstTodo.id)).toEqual([
      { ...firstTodo, completed: true },
      { ...secondTodo, title: firstTodo.title },
    ]);
  });

  it("lista apenas tarefas pendentes", () => {
    expect(pendingTodos([{ ...firstTodo, completed: true }, secondTodo])).toEqual([secondTodo]);
  });

  it("filtra tarefas sem alterar a lista original", () => {
    const todos = [{ ...firstTodo, completed: true }, secondTodo];
    expect(filterTodos(todos, "completed")).toEqual([{ ...firstTodo, completed: true }]);
    expect(filterTodos(todos, "pending")).toEqual([secondTodo]);
    expect(filterTodos(todos, "all")).toEqual(todos);
    expect(todos).toEqual([{ ...firstTodo, completed: true }, secondTodo]);
  });

  it("rejeita títulos vazios", () => {
    expect(() => createTodo("todo-4", "   ")).toThrow("ID e título");
  });

  it("remove a tarefa pelo ID", () => {
    expect(removeTodo([firstTodo, secondTodo], firstTodo.id)).toEqual([secondTodo]);
  });

  it("remove somente as tarefas concluídas", () => {
    expect(removeCompletedTodos([{ ...firstTodo, completed: true }, secondTodo])).toEqual([
      secondTodo,
    ]);
  });

  it("atualiza somente o título do ID selecionado", () => {
    expect(updateTodoTitle([firstTodo, secondTodo], firstTodo.id, "  Novo título ")).toEqual([
      { ...firstTodo, title: "Novo título" },
      secondTodo,
    ]);
    expect(() => updateTodoTitle([firstTodo], firstTodo.id, "   ")).toThrow("título");
  });
});
