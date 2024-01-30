// store.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface User {
  id: number;
  email: string;
  // 他に必要なユーザー情報があれば追加
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
  }),
  actions: {
    login({ email, password }: { email: string; password: string }): Promise<boolean> {
      return new Promise((resolve, reject) => {
        axios.get('/sanctum/csrf-cookie').then(() => {
          axios.post('/api/login', {
            email: email,
            password: password,
          }).then(response => {
            const user = response.data.user;
            this.user = user;
            this.isAuthenticated = true;
            resolve(true);
          }).catch(error => {
            console.error('ログインエラー', error);
            reject(false);
          });
        });
      });
    },

    logout(): Promise<boolean> {
      return new Promise((resolve, reject) => {
        axios.post('/api/logout').then(() => {
          this.user = null;
          this.isAuthenticated = false;
          resolve(true);
        }).catch(error => {
          console.error('ログアウトエラー', error);
          reject(false);
        });
      });
    },
  },
});
