import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
  <div>
    <div>
        <app-todo-item *ngFor="let item of todoItems "
        [Item]="item"
        > </app-todo-item>
    </div>
</div>
`,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems = [
    {'date': "14 Oct 2021",'description':'Prepare dinner'},
    {'date': "15 Oct 2021",'description':'Watch a Movie'},
    {'date': "16 Oct 2021",'description':'Carpet Clening'},
    {'date': "17 Oct 2021",'description':'Do Shopping'}
  ];

  constructor() { }


  ngOnInit(): void {
  }

}

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
