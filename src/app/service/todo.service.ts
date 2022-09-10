import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
  todoList = [
    {
      id: 1, 'task': "Task1"
    },
    {
      id: 2, 'task': "Task2"
    }
  ]
 
  constructor() { }
}
