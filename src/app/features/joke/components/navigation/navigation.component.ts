import { Component, OnInit, Inject } from '@angular/core';
import { routeToken } from '../../joke-routing.module';
import { Route } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigation: { path: string, text: string }[];

  constructor(@Inject(routeToken) routes: Route[]) {
    this.navigation = routes
    .filter(r => r.data && r.data.display)
    .map((r: Route) => ({ path: r.data.display.path, text: r.data.display.text }));
   }

  ngOnInit() {
  }

}
