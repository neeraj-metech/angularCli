import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() childData:any = '';
  @Output() parentData = new EventEmitter(); 

  addParentData(value:string){
    this.parentData.emit(value);
    console.warn(value);
  }
  

}
