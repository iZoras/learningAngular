import { Component } from '@angular/core';
import axios from 'axios';

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  loading: boolean = false;

  todos: Todos[] = [];
  id: number = 0;
  pages: number[] = [];

  ngOnInit() {
    this.fetchTodos();
  }

  async fetchTodos() {
    try {
      this.loading = true;
      const response = await axios.get<Todos[]>(
        `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${1}`
      );

      if (response.data) {
        this.todos = response.data;
        this.id = this.todos[this.todos.length - 1].id + 1;
      }
      this.loading = false;
      
    } catch (error) {
      console.error('Error fetching Todos:', error);
    }
  }

  handleInput(event: any) {
    event.preventDefault();
    this.todos = [
      { userId: 1, id: this.id, title: event?.target?.value, completed: false },
      ...this.todos,
    ];

    this.id++;
    event.target.value = '';
  }

  handleDelete(id: number) {
    if (this.todos) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    }
  }

  handlePageChange = () => {
    this.fetchTodos();
  };
}
