import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

import { HomeComponent } from './pages/home/home.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactDetailsPageComponent } from './pages/ContactDetailsPage/contact-details-page.component';
import { ContactResolverResolver } from './services/contact.resolver.resolver';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolverResolver },
  },
  {
    path: 'contact',
    component: ContactIndexComponent,
    children: [
      {
        path: 'contact/edit/:id',
        component: ContactEditComponent,
        resolve: { contact: ContactResolverResolver }
      },
      {
        path: 'contact/edit', component: ContactEditComponent
      },

    ]
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard], data: { isAuth: false }
  },
  {
    path: 'statistics',
    component: StatisticPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment?.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
