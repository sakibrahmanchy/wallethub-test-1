/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
@Component({
    selector : 'ng-app',
    template : `<form>
                    <h2>Login</h2>
                    <br/>
                        <input type="email" (input)="onChangeEmail($event)" [value]="email" name="email" />
                        <br/>
                        <input type="password" (input)="onChangePassword($event)" [value]="password" name="password" />
                        <button type="submit" (submit)="onSubmit()">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d.@$!%*?&]{8,}$/;
    email:string = "";
    password:string = "";

    onChangeEmail = ($event: any) => {
        this.email = $event.target.value;
    }

    onChangePassword = ($event: any) => {
        this.password = $event.target.value;
    }

    onSubmit = () => {
        // e.preventDefault();
        // console.log('here');
        if (this.emailRegex.test(this.email) && this.passwordRegex.test(this.password)) {
            this.logged_in = true;
        }
    }

    logged_in = false;
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};