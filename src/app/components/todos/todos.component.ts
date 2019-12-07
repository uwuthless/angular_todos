import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[];

  constructor(public todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit() {
  }

  crTodo(id: number, title: string, completed: boolean): Todo {
    return new Todo(id, title, completed);
  }

}
