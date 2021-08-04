import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ExistingComponent } from './existing/existing.component';
import { ContactComponent } from './contact/contact.component';

import { InvokeService } from './Services/invoke.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ExistingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ],
  providers: [ InvokeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
