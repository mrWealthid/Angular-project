import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'todo-thubmnail',
  templateUrl: './todo-thumbnail.component.html',
  styles: [
    `
      .section_border {
        border-left: 5px solid green;
      }
    `,
  ],
})
export class TodoThumbnailComponent {
  faTrash = faTrash;
  faEdit = faEdit;

  @Input()
  toggle?: boolean;

  @Input()
  todo: any;

  @Input()
  last: any;

  @Output()
  onDelete = new EventEmitter();

  @Output()
  onToggle = new EventEmitter();

  handleToggle(val: any) {
    return this.onToggle.emit(val);
  }

  handleDelete(event: any, val: any) {
    event.stopPropagation();
    console.log(val);

    return this.onDelete.emit(val);
  }
}
