import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import Todo from '../Models/Todo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient :HttpClient) { }
  getTodos(limit:number):Observable<Todo[] >{

  return  this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit='+limit);

  }
  delete(id :number){
    return  this.httpClient.delete('https://jsonplaceholder.typicode.com/todos/'+id);
  }

  update(todo :Todo){
    return  this.httpClient.put('https://jsonplaceholder.typicode.com/todos/'+todo.id ,todo)
  }
}
