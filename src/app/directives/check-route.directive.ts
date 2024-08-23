import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[appCheckRoute]',
  standalone: true,
})
export class CheckRouteDirective implements OnInit {
  @Input() appCheckRoute!: string;

  private _router = inject(Router);
  private _viewContainer = inject(ViewContainerRef);
  private _template = inject(TemplateRef);

  ngOnInit() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateView();
      }
    });
    this.updateView();
  }

  private updateView() {
    const shouldShow = this.appCheckRoute === this.getRoute();
    if (shouldShow) {
      this._viewContainer.createEmbeddedView(this._template);
    } else {
      this._viewContainer.clear();
    }
  }

  private getRoute() {
    return this._router.url.split('?')[0];
  }
}
