import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]}, 
  {path:'login',component:LoginComponent},
  {path: '', redirectTo:'login',pathMatch: 'full'},
  {path: '**',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
