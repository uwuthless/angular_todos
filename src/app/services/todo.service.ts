import {Injectable} from '@angular/core';
import {Todo} from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  text: string = 'jopa';
  todos = [new Todo(1, 'ff', true), new Todo(2, 'gg', false)];

  getTodos() {
    return this.todos;
  }

  getText() {
    return this.text;
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    console.log(this.todos);
    this.todos = this.todos.filter(item => item !== todo);
    console.log(this.todos);
  }

  changeString() {
    this.text = 'gavno';
  }
}
