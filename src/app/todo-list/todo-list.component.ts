import {Component, OnInit} from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public selectedOptions: number[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  public getTodoSelection(): number[] {
    return [];
  }

  public getTodo(): { id: number; value: string }[] {
    return this.todoService.todoItems;
  }

  onNgModelChange($event: any){
    this.selectedOptions=$event;
    this.todoService.todoSelections = this.selectedOptions;
  }
}
