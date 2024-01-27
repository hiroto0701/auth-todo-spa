// store.ts
import { defineStore } from 'pinia';

interface Todo {
  id: number;
  title: string;
  priority: number;
  content: string;
  isDone: boolean;
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: {
      "id": 1,
      "title": "ご飯を作る",
      "priority": 3,
      "content": "お昼ご飯を作ります",
      "isDone": false
    } as Todo,
  }),
});
