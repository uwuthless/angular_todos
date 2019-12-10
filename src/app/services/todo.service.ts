import {Injectable} from '@angular/core';
import {Todo} from '../models/Todo';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
    this.fetchTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  text: string = 'jopa123';
  todos: Todo[];

  url = `https://jsonplaceholder.typicode.com/todos`;
  todosLimit = '?_limit=10';

  httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  httpOption = {
    headers: this.httpHeaders
  };

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


  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}${this.todosLimit}`);
  }

  updateTodoStatus(todo: Todo): Observable<any> {
    todo.completed = !todo.completed;
    return this.http.put(`${this.url}/${todo.id}`, todo, this.httpOption);
  }


}
