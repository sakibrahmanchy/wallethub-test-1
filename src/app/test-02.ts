/**
 * Update the following components to meet the requirements : 
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
import { Component, EventEmitter, NgModule, Output  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector : 'textfield',
    template : '<input type="text" (input)="changeField($event)"/>'
})
export class TextField {
    field = "";

    @Output() textField = new EventEmitter<string>();

    changeField = (event: any) => {
        this.textField.emit(event.target.value);
    }
}

@Component({
    selector : 'child-component',
    template : `<h2>Title:<h2><br/><textfield  (textField)="onFieldChange($event)"></textfield>`
})
export class ChildComponent {

    @Output() title = new EventEmitter<string>();

    onFieldChange = (fieldValue: string) => {
        this.title.emit(fieldValue);
    }
}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component  (title)="onTitleChange($event)"></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title:string = "";

    onTitleChange = (value: string) => {
       this.title = value;
    }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module {};