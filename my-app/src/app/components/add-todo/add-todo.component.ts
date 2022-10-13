import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {v4 as uuidv4} from 'uuid';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  text:String ="";
@Output() addToDoEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addToDO(){
 let todo={
  task:this.text,
  completed:false,
  id: uuidv4()

  }
    console.log(todo)
    this.addToDoEvent.emit(todo)
    this.text=""
  }

}
