import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoItems: { id: number; value: string }[] = [{id: 0, value: "red"}, {id: 1, value: "blue"}, {id: 2, value: "purple"}];
  todoSelections: number[] = [];
  constructor() {
  }
}
