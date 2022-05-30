import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  taskList:any[] = [];
  addTask(task:NgForm){
    // console.warn(task);
    this.taskList.push({id:this.taskList.length,name:task});
    // task.reset();
  }
  removeTask(id:number){
    // console.warn(id)
    this.taskList = this.taskList.filter(item=>item.id!==id);
  }
}
