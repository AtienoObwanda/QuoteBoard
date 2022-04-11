
import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {

  constructor(public el:ElementRef) { 
    el.nativeElement.style.backgroundColor="green"
   }
}