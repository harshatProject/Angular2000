import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  template: `
  
    <div *ngFor="let day of daysOfWeek">
      <p>{{day}}</p>
    </div>
  
  `,
  styles:[`
  .whiteText{
    color:white;
  }

  `]
})
export class DirectiveExampleComponent implements OnInit {

  isDataAvailable:boolean = false;

  daysOfWeek:any =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

  constructor() {    
   }  

  ngOnInit(): void {
  }

}
