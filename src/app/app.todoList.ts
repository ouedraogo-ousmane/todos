import { TodoItem } from './app.todoItem';
export class TodoList{
    constructor(public user:string, private todoItems: TodoItem[] = []){

    }
    getItem(index:number): TodoItem{
        return this.todoItems[index];
    }
    getItems():readonly TodoItem[] {
        return this.todoItems;
    }
    addItem(task:string){
        this.todoItems.push(new TodoItem(task));
    }
    addItems(task:string,description:string,debut:Date,fin:Date,nombreJours = 0,nombre = this.getNombresDeJoursRestants(fin,debut,debut)){
        this.todoItems.push(new TodoItem(task,description,debut,fin,nombre));
    }
    getNombresDeJours(date1:Date,date2:Date) : number{
        var dateDiff = date1.getTime() - date2.getTime();
        var days = dateDiff / (1000 * 3600 * 24);
        return days;
    }
    changePercentage(item:TodoItem,percent:number){
        item.setPercentage(percent);
    }
    getNombresDeJoursRestants(date1:Date,date2:Date,date3:Date): number{
        date3.getDate();
        if(date1.getTime() > date3.getTime()){
            var dateDiff = date3.getTime() - date2.getTime();
            var days = dateDiff / (1000* 3600 * 24);
            return days;
        }
        else
        {
            return 0;
        }
        
    }
}