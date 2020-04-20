import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarOptionsComponent } from './components/nav-bar/nav-bar-options/nav-bar-options.component';
import { ContainerComponent } from './components/container/container.component';
import { ContainerContentsComponent } from './components/container/container-contents/container-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    NavBarOptionsComponent,
    ContainerComponent,
    ContainerContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
