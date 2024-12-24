
import { Component } from "@angular/core";

@Component({
    templateUrl: "app.component.html",
    selector: "app-root"
})
export class AppComponent{
    x: number = 5;
    title: string = "Welcome to our App";
    calc(){
        return 0;
    }

    DayPart(){
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
        return 'בוקר טוב';
        } 
        else if (currentHour >= 12 && currentHour < 18) {
        return 'צהריים טובים';
        }
        else {
        return 'ערב טוב';
        }
    }
    constructor(){

    }
}