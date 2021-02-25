import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './demo/card/card.component';
import { HeroComponent } from './demo/hero/hero.component';
import { NavbarComponent } from './demo/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, CardComponent, HeroComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
