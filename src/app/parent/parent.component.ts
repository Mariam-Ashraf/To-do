import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ItemsListComponent } from '../items-list/items-list.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(InputComponent) inputComponent: any;
  @ViewChild(ItemsListComponent) itemsListComponent: any;

  constructor() { }

  ngOnInit(): void {
  }

}
