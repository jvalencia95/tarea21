import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PostablaComponent } from './postabla/postabla.component';



@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    PostablaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    MenuComponent,
    LoginComponent,
    PostablaComponent
  ]
})
export class PrincipalModule { }
