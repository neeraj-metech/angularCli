import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {id:"1",name:"neeraj"},
    {id:"2",name:"neeraj2"},
    {id:"3",name:"neeraj3"},
    {id:"4",name:"neeraj4"}
  ];
}
