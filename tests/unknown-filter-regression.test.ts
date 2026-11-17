import { describe, expect, it } from "vitest";
import { filterTodos, type TodoFilter } from "../src/todo.js";

describe("validação do filtro de tarefas", () => {
  it("rejeita um filtro desconhecido sem alterar a lista original", () => {
    const todos = [
      { id: "todo-1", title: "Estudar requisitos", completed: false },
      { id: "todo-2", title: "Executar testes", completed: true },
    ];
    const original = [...todos];
    const unknownFilter = "unknown" as unknown as TodoFilter;

    expect(() => filterTodos(todos, unknownFilter)).toThrow();
    expect(todos).toEqual(original);
  });
});
