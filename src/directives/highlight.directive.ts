import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
       el.nativeElement.innerHTML = "red";
       el.nativeElement.onclick = ()=>{
           alert("666");
       };
    }
}