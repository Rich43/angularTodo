import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoItems: string[];
  constructor() {
    this.todoItems = ["red", "blue", "purple",];
  }
}
