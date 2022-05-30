import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from './components/pages/todo-list/todo-list.component';
import { ChildComponent } from './components/pages/child/child.component';
import { TextFormatePipe } from './pipes/text-formate.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/pages/about/about.component';
import { UserComponent } from './components/pages/user/user.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    ChildComponent,
    TextFormatePipe,
    AboutComponent,
    UserComponent,
    LoginComponent,
    NotFoundPageComponent,
    HomeComponent,
    AboutCompanyComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
