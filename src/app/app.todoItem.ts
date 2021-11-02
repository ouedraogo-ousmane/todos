import { DatePipe } from "@angular/common";

export class TodoItem{
    task:string;
    complete : string ="en cours";
    description : string;
    dateDebut : Date;
    dateFin : Date;
    nombreJours : number = 0;
    percentage :number;
    itemSpan : number;
    
    constructor(
                taskval:string,
                locationValue:string = "none",
                dateExe :Date = new Date(2021,6,20),
                dateF:Date = new Date(2021,6,20),
                percentage :number = 0,
                item : number = 5
                ){
        this.task = taskval;
        this.description = locationValue;
        this.dateDebut = dateExe;
        this.dateFin = dateF;
        this.percentage = percentage;
        this.itemSpan = item;
    }
    setPercentage(newPercent:number){
        this.percentage = newPercent;
    }
    setCompleteValue(newValue:string){
        this.complete = newValue;
    }

}