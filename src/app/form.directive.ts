import { Directive } from '@angular/core';

@Directive({
    selector: '[appForm]',
    exportAs: 'ngForm'
})

export class FormDirective {

    constructor() { }

}