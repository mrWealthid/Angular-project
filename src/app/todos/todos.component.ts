import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../Tasks';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: ITask[] = [];
  todos$: Observable<ITask[]>;
  toggleView: boolean = false;

  constructor(private todoService: TodoserviceService) {}

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe((todos) => (this.todos = todos));

    //using async pipe--A better way
    this.todos$ = this.todoService.getTodos();
  }
  handleToggleView(val: string) {
    this.toggleView = !this.toggleView;
  }

  handleDelete(taskId: number) {
    console.log('I bubbled up ', taskId);

    this.todoService
      .deleteTodo(taskId)
      .subscribe(
        () => (this.todos = this.todos.filter((t) => t.id !== taskId))
      );
  }

  handleToggle(task: any) {
    console.log(task);
    task.reminder = !task.reminder;
    this.todoService.UpdateReminder(task).subscribe();
  }

  handleAddTodos(val: any) {
    this.todoService
      .createTodo(val)
      .subscribe(() => (this.todos = [...this.todos, val]));
  }
}
