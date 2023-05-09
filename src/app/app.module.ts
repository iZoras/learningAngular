import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/ui/button/button.component';
import { NavComponent } from './features/nav/nav.component';
import { LinkComponent } from './shared/ui/link/link.component';
import { TodosComponent } from './features/todos/todos.component';
import { TodoComponent } from './shared/ui/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { LayoutComponent } from './features/layout/layout.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavComponent,
    LinkComponent,
    TodosComponent,
    TodoComponent,
    TodoPageComponent,
    PostsPageComponent,
    PageNotFoundPageComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
