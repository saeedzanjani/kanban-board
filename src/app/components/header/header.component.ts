import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CheckRouteDirective } from '../../directives/check-route.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatButtonModule, CheckRouteDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
