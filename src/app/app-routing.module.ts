import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UserHttpComponent } from './component/user-http/user-http.component';

const routes: Routes = [
 
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserHttpComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
