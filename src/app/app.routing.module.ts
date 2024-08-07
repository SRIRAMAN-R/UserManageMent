import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ForgetpasswordComponent } from "./forgetpassword/forgetpassword.component";
import { NgModule } from "@angular/core";

export const routes: Routes =[
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path: 'login',component: LoginComponent},
    {path:'newuser', loadComponent:() => import('./newuser/newuser.component').then(m=> m.NewuserComponent)},
    {path: 'forgetpassword', component:ForgetpasswordComponent},
    {path: 'admin',loadComponent:()=> import('./admin/admin.component').then(m=>m.AdminComponent)}

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModuke{}