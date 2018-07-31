import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirebaseModule, FirebaseProvider } from 'angular-firebase';
import { AppComponent } from './app.component';
import { FirebaseUploadComponent } from './firebase-upload/firebase-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FirebaseUploadComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule
  ],
  providers: [
    FirebaseProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
