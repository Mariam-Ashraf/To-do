import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() sendTaskInput = new EventEmitter<string>();
  userInput: string = '';
  taskInput: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sendTaskToParent(value: string) {
    this.taskInput = value;
    this.sendTaskInput.emit(this.taskInput);
  }

}
