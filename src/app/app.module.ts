import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './pages/home/components/nav/nav.component';
import { HeroComponent } from './pages/home/components/hero/hero.component';
import { FooterComponent } from './pages/home/components/footer/footer.component';
import { MainComponent } from './pages/home/components/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { GetFromApiService } from './pages/services/get-from-api.service';
import { CharacterListComponent } from './pages/home/components/main/characters/components/character-list/character-list.component';
import { LocationListComponent } from './pages/home/components/main/locations/components/location-list/location-list.component';
import { CharacterCardComponent } from './pages/home/components/main/characters/components/character-list/character-card/character-card.component';
import { LocationCardComponent } from './pages/home/components/main/locations/components/location-list/location-card/location-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    CharacterListComponent,
    LocationListComponent,
    CharacterCardComponent,
    LocationCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
