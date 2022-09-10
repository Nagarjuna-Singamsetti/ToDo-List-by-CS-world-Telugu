import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public taskId: number = 3;

  todoList = [
    {
      id: 1, 'task': "Task1"
    },
    {
      id: 2, 'task': "Task2"
    }
  ]

  constructor() { }

  addToDo(taskName: string) {
    this.todoList.push({ "id": this.taskId++, 'task': taskName })
  }

  deleteToDo(index: any) {
    this.todoList.splice(index, 1);
  }
}
