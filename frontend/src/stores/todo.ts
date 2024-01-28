// store.ts
import { defineStore } from 'pinia';
import axios from 'axios';

// interface Todo {
//   id: number;
//   title: string;
//   priority: number;
//   content: string;
//   isDone: boolean;
// }

export const useTodoStore = defineStore('todo', {
  state: () => ({
    // todos:[
    //   {
    //     "id": 1,
    //     "title": "ご飯を作る",
    //     "priority": 3,
    //     "content": "お昼ご飯を作ります",
    //     "isDone": false
    //   } as Todo, 
    // ]
    todos: [],
  }),
  actions: {
    loadPage() {
      axios.get('/api/load').then(response => {
        this.todos = response.data;
      }).catch(error => {
        console.error('API呼び出しエラー', error);
      });
    },
  }
});
