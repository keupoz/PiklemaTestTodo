import { defineStore } from 'pinia';

export interface TodoItem {
  id: number;
  title: string;
  isDone: boolean;
}

interface TodosState {
  lastId: number;
  items: TodoItem[];
}

export const useTodosStore = defineStore('todos', {
  state: (): TodosState => ({
    lastId: -1,
    items: [],
  }),
  actions: {
    addTodo(title: TodoItem['title']) {
      // Update last id and assign the new id
      const id = ++this.lastId;

      this.items.push({ id, title, isDone: false });
    },

    removeTodo(id: TodoItem['id']) {
      this.items = this.items.filter(todo => todo.id !== id);
    },

    removeDone() {
      this.items = this.items.filter(todo => !todo.isDone);
    },
  },
  persist: true,
});
