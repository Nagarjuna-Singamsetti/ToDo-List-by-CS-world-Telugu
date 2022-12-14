import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  taskInput = "";

  constructor(private _todo: TodoService) { }

  ngOnInit(): void {
  }

  addTask() {
    this._todo.addToDo(this.taskInput)
    this.taskInput = "";
  }
  resetForm() {
    this.taskInput = "";
  }
}
