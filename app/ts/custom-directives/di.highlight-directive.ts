import {
    Directive,
    ElementRef,
    HostListener,
    Input
} from '@angular/core';

@Directive({
    selector: "[diHighlight]"
})
export class DependencyInjectionHighlightDirective {

    @Input()
    public diColorCodeP: string = null;

    constructor(private HtmlElementRef: ElementRef) {}

    @HostListener("mouseenter") onMouseEnter() {

        this.highlight_DIHD("CornflowerBlue");
    }

    @HostListener("mouseleave") onMouseLeave() {

        this.highlight_DIHD(null);
    }

    highlight_DIHD(constColorCode: string): void {

        this.HtmlElementRef.nativeElement.style.backgroundColor = this.diColorCodeP || constColorCode;
    }
}
