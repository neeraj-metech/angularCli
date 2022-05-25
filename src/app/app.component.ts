import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameInput="";
  count = 0;
  disable = false;
  show = 'yesa';
  color = 'red';
  getName(val:string){
    this.nameInput=val;
  }
  counter(type:string){
    type=='plus' ? this.count++ : this.count--; 
  }
  changeTextColor(){
    this.color=="red"?this.color="green":this.color='red';
  }
  users = ['John','Karter','Petter'];
  userDetails = [
    {name:'John',age:'24',hobbies:['playing','reading','watching movies']},
    {name:'Carter',age:'30',hobbies:['reading','playing','watching movies']},
    {name:'Petter',age:'18',hobbies:['watching movies','reading','playing']}
  ]
  getFormData(data:NgForm){
    console.warn(data);
  }
  currentData = 'This content coming from parent component.';
  items = [{id:1,item:'item1'}, {id:2,item:'item2'}, {id:3,item:'item3'}, {id:4,item:'item4'}];
  addItem(newItem: any) {
    this.items.push({id:this.items.length+1,item:newItem});
  }
  removeItem(id:any){
    console.log(id);
    this.items = this.items.filter(item=>item.id!=id)
  }
}
