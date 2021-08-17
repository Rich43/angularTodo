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

  onSubmit(): void {
    console.warn(this.todoForm.value);
    this.addTodo(this.todoForm.get('todoTitle')?.value);
    this.todoForm.reset();
  }

  private addTodo(todo: string) {
    this.todoService.todoItems.push(todo);
  }
}
