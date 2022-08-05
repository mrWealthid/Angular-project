import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input()
  text!: string;

  @Input()
  color!: string;

  @Output()
  onToggle: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  handleClick() {
    this.onToggle.emit();
  }
}
