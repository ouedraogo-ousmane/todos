import { Component } from '@angular/core';
import { TodoItem } from './app.todoItem';
import { TodoList } from './app.todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Ousmane && Lucien",[new TodoItem("Go for run"),
  new TodoItem("Get flowers"),
  new TodoItem("Collect tickets")
  ]);
  get username():string{
    return this.list.user;
  }
  get itemCount():number{
    return this.list.getItems().filter(item =>!item.complete).length;
  }
  get items():readonly TodoItem[]{
    return this.list.getItems();
  }
  addItem(newItem : string,location:string,debut:string,fin:string){
    if(newItem != ""){
      var debutDate = new Date(debut);
      var finDate = new Date(fin);
      this.list.addItems(newItem,location, debutDate,finDate);
    }
  }
  changePercentage(index:string,percentage:string){
    this.list.getItem((Number(index))-1).setPercentage(parseFloat(percentage));
    if(parseFloat(percentage) == 100){
      this.list.getItem((parseInt(index))-1).setCompleteValue("terminé");
    }
    
  }
  addDaysStay(){
    
  }
  showComplete:boolean = false;

}
