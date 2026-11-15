import { describe, expect, it } from "vitest";
import { createTodo, toggleTodo } from "../src/todo.js";

describe("regressão de alternância por ID", () => {
  it("alterna somente a tarefa selecionada quando os títulos são iguais", () => {
    const firstTodo = createTodo("todo-1", "Título repetido");
    const secondTodo = createTodo("todo-2", "Título repetido");
    const todos = [firstTodo, secondTodo];

    const toggled = toggleTodo(todos, firstTodo.id);
    expect(toggled).toEqual([
      { ...firstTodo, completed: true },
      secondTodo,
    ]);
    expect(toggled).toHaveLength(2);

    expect(toggleTodo(toggled, firstTodo.id)).toEqual(todos);
  });
});
