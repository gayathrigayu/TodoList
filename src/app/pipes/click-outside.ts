
import { fromEvent as observableFromEvent, Observable, Subscription } from 'rxjs';

import { delay, tap } from 'rxjs/operators';
import { Directive, OnInit, OnDestroy, Output, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[click-outside]'
})

export class ClickOutside implements OnInit, OnDestroy {
  private listening: boolean;
  private globalClick: Subscription;
  private mobileGlobalClick: Subscription;

  @Output('clickOutside') clickOutside: EventEmitter<Object>;

  constructor(private _elRef: ElementRef) {
    this.listening = false;
    this.clickOutside = new EventEmitter();
  }

  ngOnInit() {
    this.mobileGlobalClick = observableFromEvent(document, 'touchend').pipe(
      delay(1),
      tap(() => {
        this.listening = true;
      })).subscribe((event: any) => {
        this.onGlobalClick(event);
      });

    this.globalClick = observableFromEvent(document, 'click').pipe(
      delay(1),
      tap(() => {
        this.listening = true;
      })).subscribe((event: any) => {
        this.onGlobalClick(event);
      });
  }

  ngOnDestroy() {
    if (this.globalClick) {
      this.globalClick.unsubscribe();
    }

  }

  onGlobalClick(event: any) {
    if (this.listening === true) {
      if (this.isDescendant(this._elRef.nativeElement, event.target) === true) {

        this.clickOutside.emit({
          target: (event.target || null),
          value: false
        });
      } else {
        this.clickOutside.emit({
          target: (event.target || null),
          value: true
        });
      }
    }
  }

  isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent || (child.offsetParent && child.offsetParent.classList[0] == 'task-create')) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }
}
