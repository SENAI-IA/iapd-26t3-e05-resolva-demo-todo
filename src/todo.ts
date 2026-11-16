export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodoFilter = "all" | "pending" | "completed";

export function createTodo(id: string, title: string): Todo {
  const normalizedId = id.trim();
  const normalizedTitle = title.trim();
  if (!normalizedId || !normalizedTitle) throw new Error("Uma tarefa precisa de ID e título.");
  return { id: normalizedId, title: normalizedTitle, completed: false };
}

export function addTodo(todos: readonly Todo[], todo: Todo): Todo[] {
  return [...todos, todo];
}

export function updateTodoTitle(todos: readonly Todo[], id: string, title: string): Todo[] {
  const normalizedTitle = title.trim();
  if (!normalizedTitle) throw new Error("Uma tarefa precisa de título.");
  return todos.map((todo) => (todo.id === id ? { ...todo, title: normalizedTitle } : todo));
}

export function toggleTodo(todos: readonly Todo[], id: string): Todo[] {
  const selected = todos.find((todo) => todo.id === id);
  return selected
    ? todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    : [...todos];
}

export function filterTodos(todos: readonly Todo[], filter: TodoFilter): Todo[] {
  if (filter === "pending") return todos.filter((todo) => !todo.completed);
  if (filter === "completed") return todos.filter((todo) => todo.completed);
  return [...todos];
}

export function pendingTodos(todos: readonly Todo[]): Todo[] {
  return todos.filter((todo) => !todo.completed);
}

export function removeTodo(todos: readonly Todo[], id: string): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}

export function removeCompletedTodos(todos: readonly Todo[]): Todo[] {
  return todos.filter((todo) => !todo.completed);
}
