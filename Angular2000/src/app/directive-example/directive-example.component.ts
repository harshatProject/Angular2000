import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  template: `
  <div>
    <p> Simple ngIf </p>
    <p *ngIf="isDataAvailable">Data Avilable</p>
  </div>

  <div>
  <p> ngIf with else, using ng-template </p>
  <p *ngIf="isSunday(); else nonSunday">Today is Sunday</p>
  <ng-template #nonSunday>
    <p>Today is a weekday and is non sunday</p>
  </ng-template>
  </div>
  `,
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  isDataAvailable:boolean = false;

  constructor() {
    setTimeout(()=>{this.isDataAvailable =true}, 3000);
   }

   isSunday():boolean {
     var today = new Date();
     return today.getDay()===6 ?  true:false;
   } 

  ngOnInit(): void {
  }

}
