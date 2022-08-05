import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui-service.service';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.css'],
})
export class AddtodosComponent implements OnInit {
  title: string;
  description: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  @Output()
  addTodo = new EventEmitter();

  constructor(
    private todoService: TodoserviceService,
    private uiService: UiService
  ) {
    this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  handleSubmit(val: any) {
    let formValues = { ...val, id: Date.now() };

    console.log(formValues);

    return this.addTodo.emit(formValues);

    // console.log(val);
  }
}
