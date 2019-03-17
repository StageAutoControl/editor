import {Directive, ElementRef, Input, OnChanges, Renderer2} from "@angular/core";

// stolen from https://stackoverflow.com/a/50032557/2688600

@Directive({
  selector: '[hidden]'
})
export class HiddenDirective implements OnChanges {
  @Input() hidden: boolean;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
  }

  ngOnChanges() {
    this.renderer.setStyle(this.elRef.nativeElement, 'display', this.hidden ? 'none' : null);
  }
}
