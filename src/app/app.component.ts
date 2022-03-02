import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'divatt';
  public url : any;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.url = event.url;
          }
    });
  }

  ngOnInit() {
    $.getScript('assets/js/script.js');
    $.getScript('assets/js/sticky-kit.js');
  }
}
