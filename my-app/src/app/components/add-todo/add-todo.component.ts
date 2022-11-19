import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Todo from 'src/app/Models/Todo';
import {v4 as uuidv4} from 'uuid';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  text:string ="";
@Output() addToDoEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addToDO(){
 let todo= new Todo( Math.round(10.95) ,Math.round(11.95),this.text,false )


    console.log(todo)
    this.addToDoEvent.emit(todo)
    this.text=""
  }

}
