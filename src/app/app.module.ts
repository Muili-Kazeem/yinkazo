import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from "@angular/material/icon";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordComponent } from './components/record/record.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { ManifestoComponent } from './components/manifesto/manifesto.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { CompssaComponent } from './components/compssa/compssa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NavBarComponent,
    FooterComponent,
    RecordComponent,
    AchievementComponent,
    ManifestoComponent,
    CompssaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp({"projectId":"yinkazo","appId":"1:871739849625:web:1931c15ae497bc05d73108","storageBucket":"yinkazo.appspot.com","apiKey":"AIzaSyCkBeIWZBpCnqb1FCD_xP2L1d_FqkaUF_g","authDomain":"yinkazo.firebaseapp.com","messagingSenderId":"871739849625","measurementId":"G-2GSFXLVXSH"})),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
