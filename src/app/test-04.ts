/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'ng-app',
    template : `
                <h2>Enter your first and last name</h2>
               
                <div>
                    <input type="text" (input)="changeFirstName($event)" [value]="firstName" />
                    <input type="text" (input)="changeLastName($event)" [value]="lastName" />
                    <div v-if="userName">{{ userName }}</div>
                </div>
                `,
    styles : []
})
export class UserNameComponent {
    firstName: string = "";
    lastName: string = "";
    userName: string = "";

    changeFirstName ($event) {
        this.firstName = $event.target.value.toLowerCase();
        this.updateUserName();
    }

    changeLastName ($event) {
        this.lastName = $event.target.value.toLowerCase();
        this.updateUserName();
    }

    randomIntFromInterval(min: number , max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    updateUserName () {
        if (this.firstName && this.lastName) {
            this.userName = `${this.firstName}_${this.lastName}_${this.randomIntFromInterval(1, 9)}`;
        }
    }

}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : UserNameComponent
            }
        ])
    ],
    declarations : [UserNameComponent]
})
export class UserNameModule {};