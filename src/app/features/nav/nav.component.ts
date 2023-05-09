import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  title = 'new-project';
  nav = [
    { id: 1, title: 'Todo app', link: '/todo' },
    { id: 2, title: 'Posts app', link: '/posts' },
  ];
}
