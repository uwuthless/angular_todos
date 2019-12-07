import {Component} from '@angular/core';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'asdfasdfasdg';

  constructor(private ts: TodoService) {
    console.log(this);
  }

  changeName(name: string): string {
    this.name = name;
    return 'azz';
  }




}
