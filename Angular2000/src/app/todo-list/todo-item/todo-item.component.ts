import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `<div>
  <span>{{Item.date}}</span>    
  <span style="margin:10px"></span>
  <span>{{Item.description}}</span>
</div>`,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() Item:any;

  //{'date': "14 Oct 2021",'description':'Prepare dinner'}
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
