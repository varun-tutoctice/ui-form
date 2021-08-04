import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ExistingComponent } from './existing/existing.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  // { path: "login", component: LoginComponent },
  // { path: "logout", component: LogoutComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "", component: FormComponent },
      { path: "existing", component: ExistingComponent },
      { path: "contact", component: ContactComponent },
    ],
  },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
