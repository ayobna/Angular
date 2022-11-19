import { Component, EventEmitter, Input, Output } from '@angular/core';
import Todo from 'src/app/Models/Todo';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent  {

  @Input()
  todo!: Todo;

  @Output() toggleEvent = new EventEmitter

  @Output() deleteEvent = new EventEmitter
  constructor() { }

  toggle(todo: any) {
    this.toggleEvent.emit(todo)

  }
  delete(todo: any) {

    this.deleteEvent.emit(todo)
  }


}
