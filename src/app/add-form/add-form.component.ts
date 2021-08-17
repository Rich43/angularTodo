import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  todoForm = this.formBuilder.group({
    todoTitle: ''
  });

  constructor(private formBuilder: FormBuilder, private todoService: TodoService) {}

  ngOnInit(): void {
  }

  onDelete(): void {
    const todoItems = this.todoService.todoItems;
    for (const selection of this.todoService.todoSelections) {
      todoItems.splice(todoItems.findIndex(item => item.id === selection), 1);
    }
  }

  onSubmit(): void {
    this.addTodo(this.todoForm.get('todoTitle')?.value);
    this.todoForm.reset();
  }

  private addTodo(todo: string) {
    const todoItems = this.todoService.todoItems;
    const nextId = todoItems.map((item) => item.id).reverse()[0] + 1;
    if (todo.trim()) {
      todoItems.push({id: nextId, value: todo});
    }
  }
}
