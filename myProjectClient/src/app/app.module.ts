import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoScreenComponent } from './video-conference/components/video-screen/video-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './video-conference/components/login/login.component';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { FooterComponentComponent } from './core/components/footer-component/footer-component.component';



@NgModule({
  declarations: [
    AppComponent,
    VideoScreenComponent,
    LoginComponent,
    FooterComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DateInputsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
