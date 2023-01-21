import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { LoginComponent } from './principal/login/login.component';
import { PostablaComponent } from './principal/postabla/postabla.component';

const routes: Routes = [

  {path: 'postabla', component: PostablaComponent, canActivate: [CanactivateGuard]},

  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
