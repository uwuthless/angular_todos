import {Component, OnInit, Input} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';
import {log} from 'util';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() innerTodo: Todo;

  getClasses() {
    return {
      todo: true,
      'is-complete': this.innerTodo.completed
    };
  }

  constructor(private ts: TodoService) {
  }

  chbPressed() {
    this.ts.updateTodoStatus(this.innerTodo).subscribe((todo) => {
      log(todo);
    });
  }

  deleteTodo() {
    this.ts.deleteTodo(this.innerTodo);
  }

  ngOnInit() {
  }

}
