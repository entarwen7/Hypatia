import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
//import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//import { provideAuth, getAuth} from "@angular/fire/auth";
//  import { Observable } from 'rxjs';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SidenavComponent } from './pages/components/sidenav/sidenav.component';
import { LearnersModule } from './pages/components/learners/learners.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    //provideAuth(() => getAuth()),
    AngularFireAuthModule,
    HttpClientModule,
    LearnersModule




  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
