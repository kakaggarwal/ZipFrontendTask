import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavLink } from './core/models/nav-link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  links: NavLink[] = [];

  constructor(private title: Title) {
    this.title.setTitle('Frontend');
  }

  ngOnInit(): void {
    this.links = [
      new NavLink('Dashboard', 'dashboard'),
      new NavLink('Posts', 'posts'),
      new NavLink('Albums', 'albums'),
      new NavLink('Photos', 'photos'),
    ]
  }


}
