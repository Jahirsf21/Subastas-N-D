import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'singUp', component: SingUpComponent},
  {path: 'singIn', component: SingInComponent}
];
