import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/Models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  constructor(private todoService :TodoService) { }


  todos :Todo[ ] = [ ]


  ngOnInit(): void {
    console.log("sad")
  this.todoService.getTodos(5).
  subscribe((todos: Todo[])=>{
    this.todos=todos

 } );
  }

  toggleToDo(todo: Todo) {

    this.todos = this.todos.map(item => {
      if (todo.id === item.id) {
        item.completed = !item.completed
        this.todoService.update(item).subscribe(()=>{

        })
      }
      return item;
    })
  }
  deleteToDO(todo: Todo) {

    this.todoService.delete(todo.id).subscribe(()=>{
      this.todos = this.todos.filter(item=>{
        return item.id !=todo.id;
      })
    })



  }
  addToDO(todo:Todo){
 this.todos.push(todo)
 console.log(this.todos)
  }
}
