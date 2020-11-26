import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './home-page/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './home-page/signup/signup.component';
import { BloggerModuleModule } from './blogger-module/blogger-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { AuthService } from './shared/services/auth.service';
import { AuthInterceptorService } from './core/httpInterceptor/auth-interceptor.service';
import { AuthGuard } from './core/auth.guard';
import { DateAgoPipe } from './shared/pipes/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BloggerModuleModule,
    BrowserAnimationsModule,
    MatDividerModule
  ],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
