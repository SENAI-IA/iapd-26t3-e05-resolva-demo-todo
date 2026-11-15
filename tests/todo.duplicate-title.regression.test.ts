import { describe, expect, it } from "vitest";
import { createTodo, toggleTodo } from "../src/todo.js";

describe("regressão de toggle por ID", () => {
  it("alterna somente o ID selecionado quando os títulos são iguais", () => {
    const firstTodo = createTodo("todo-1", "Título repetido");
    const secondTodo = createTodo("todo-2", "Título repetido");
    const todos = [firstTodo, secondTodo];

    expect(toggleTodo(todos, firstTodo.id)).toEqual([
      { ...firstTodo, completed: true },
      secondTodo,
    ]);
    expect(toggleTodo(todos, "todo-inexistente")).toEqual(todos);
  });
});
