import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
public todos:any;
  constructor(private _todo:TodoService) { }

  ngOnInit(): void {
    this.todos=this._todo.todoList
  }

}
