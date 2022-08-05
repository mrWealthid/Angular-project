import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from './Tasks';

const httpOptions = {
  headers: new HttpHeaders({
    ContentType: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoserviceService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
    // const todos = of(TODOS);
    // return todos;
  }

  createTodo(todo: any): Observable<ITask[]> {
    const url = `${this.apiUrl}`;
    return this.http.post<ITask[]>(url, todo, httpOptions);
  }

  getTodoById(id: number) {
    return TODOS.find((todo) => todo.id === id);
  }

  updateTodo(id: number) {
    const findByIndex = TODOS.findIndex((todo) => todo.id === id);
    //  return TODOS[findByIndex] =   this.getTodoById(id)
  }

  deleteTodo(id: number): Observable<Task[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Task[]>(url);
    // console.log(TODOS.filter((todo) => todo.id !== id));
    // return TODOS.filter((todo) => todo.id !== id);
    // console.log('I got here');
    // TODOS.pop();
    // cons;
  }
  UpdateReminder(task: any): Observable<Task[]> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task[]>(url, task, httpOptions);
    // console.log(TODOS.filter((todo) => todo.id !== id));
    // return TODOS.filter((todo) => todo.id !== id);
    // console.log('I got here');
    // TODOS.pop();
    // cons;
  }
}

let TODOS: ITask[] = [];
