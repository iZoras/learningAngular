import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

const routes: Routes = [
  { path: 'todo', component: TodoPageComponent },
  {path: 'posts', component: PostsPageComponent},
  { path: '404', component: PageNotFoundPageComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
