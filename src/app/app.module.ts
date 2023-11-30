import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { enterAnimation } from './animations/nav-animations';

import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({
    navAnimation:enterAnimation
  }), AppRoutingModule, 
            AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule, HttpClientModule, provideFirebaseApp(() => initializeApp({"projectId":"ionic-ng-up","appId":"1:39769365446:web:642ccdbad8a878b58330c7","storageBucket":"ionic-ng-up.appspot.com","apiKey":"AIzaSyB77T1oSUs3kAfQ0ULMef0KcQy-2e3rSA4","authDomain":"ionic-ng-up.firebaseapp.com","messagingSenderId":"39769365446"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
