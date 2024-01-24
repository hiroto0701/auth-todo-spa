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
    todos: [
      {
        "id": 1,
        "title": "ご飯を作る",
        "priority": 3,
        "content": "お昼ご飯を作ります",
        "isDone": false
      },
      {
        "id": 2,
        "title": "お風呂に入る",
        "priority": 2,
        "content": "お風呂に入ります",
        "isDone": false
      },
      {
        "id": 9,
        "title": "寝る",
        "priority": 3,
        "content": "寝ます",
        "isDone": false
      },
      {
        "id": 10,
        "title": "起きる",
        "priority": 3,
        "content": "寝ます",
        "isDone": true
      },
    ] as Todo[],
  }),
});
