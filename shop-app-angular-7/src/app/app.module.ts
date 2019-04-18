import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PreferredShopsComponent} from './components/preferred-shops/preferred-shops.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreferredShopsComponent,
    NavBarComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'preferred-shops', component: PreferredShopsComponent},
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
