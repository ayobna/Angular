import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo!: { id: string; task: string; completed: boolean; };

  @Output() toggleEvent = new EventEmitter

  @Output() deleteEvent = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  toggle(todo: any) {
    this.toggleEvent.emit(todo)

  }
  delete(todo: any) {
    this.deleteEvent.emit(todo)

  }


}
