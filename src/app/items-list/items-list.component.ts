import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() taskValue: any;
  list: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.taskValue != '') {
      this.list.push(this.taskValue);
    }
  }

  ischecked(event: any) {
    if (event.target.checked) {
      event.target.parentElement.style = "text-decoration: line-through;";
    }
    else {
      event.target.parentElement.style = "text-decoration: none;";
    }
  }

  deleteTask(task: string) {
    this.list = this.list.filter(elem => elem != task);
  }
}