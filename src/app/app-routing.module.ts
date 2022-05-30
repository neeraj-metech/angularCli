import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { UserComponent } from './components/pages/user/user.component';


const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent,children:[
      { path: 'company', component: AboutCompanyComponent },
      { path: 'me', component: AboutMeComponent }
    ] 
  },
  { path: 'user/:id', component: UserComponent },
  { path: 'login', component: LoginComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
