import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [
    { id: "1", task: 'new skills', completed: false },
    { id: "2", task: 'update update function', completed: true }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  toggleToDo(todo: any) {

    this.todos = this.todos.map(item => {
      if (todo.id === item.id) {
        item.completed = !item.completed
      }
      return item;
    })
  }
  deleteToDO(todo: any) {

    this.todos = this.todos.filter(item=>{
      return item.id !=todo.id;
    })

  }
  addToDO(todo:any){
 this.todos.push(todo)
 console.log(this.todos)
  }
}
