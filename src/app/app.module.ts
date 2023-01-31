import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

//Step 2 - Routing module import
import { Routes, RouterModule } from '@angular/router';

//Step 3 - Import the components recently generated
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';

//Step 4 - use Routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
];
//Step 5 - use RouterModule
@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
