import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'new-project';
  nav = [
    { id: 1, title: 'home', link: "/todo-page", isShown: true },
    { id: 2, title: 'about me',link: "https://www.youtube.com/watch?v=2yF7tjWkNFo&ab_channel=penguinz0" ,isShown: true},
    { id: 3, title: 'contacts' , link: "https://www.youtube.com/watch?v=2yF7tjWkNFo&ab_channel=penguinz0" ,isShown: false},
    { id: 4, title: 'map' , link: "https://www.youtube.com/watch?v=2yF7tjWkNFo&ab_channel=penguinz0" ,isShown: false},
  ];
}
