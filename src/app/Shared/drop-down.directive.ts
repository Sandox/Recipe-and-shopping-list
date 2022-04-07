import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  //To dynamically add a css class property of the element of the directive by using @HostBinding ('') and binding to the .open class
  // which allows us access to property of the elements the directive is placed on

 @HostBinding('class.open') isOpen = false;

  @HostListener('document: click', ['$event']) toggleOpen(event: Event){
0
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) { }

}
