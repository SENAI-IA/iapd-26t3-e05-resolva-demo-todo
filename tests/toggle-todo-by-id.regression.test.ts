import { describe, expect, it } from "vitest";
import { createTodo, toggleTodo } from "../src/todo.js";

describe("regressão: alternância de tarefa pelo ID", () => {
  it("alterna somente a tarefa selecionada quando os títulos são iguais", () => {
    const firstTodo = createTodo("todo-1", "Comprar leite");
    const secondTodo = createTodo("todo-2", "Comprar leite");
    const todos = [firstTodo, secondTodo];

    const afterFirstToggle = toggleTodo(todos, firstTodo.id);
    expect(afterFirstToggle).toEqual([
      { ...firstTodo, completed: true },
      { ...secondTodo, completed: false },
    ]);

    const afterSecondToggle = toggleTodo(afterFirstToggle, secondTodo.id);
    expect(afterSecondToggle).toEqual([
      { ...firstTodo, completed: true },
      { ...secondTodo, completed: true },
    ]);
  });
});
