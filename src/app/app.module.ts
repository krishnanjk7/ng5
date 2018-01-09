import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ZeroConfigComponent } from './zero-config/zero-config.component';
import { WithOptionsComponent } from './with-options/with-options.component';
import { WithAjaxComponent } from './with-ajax/with-ajax.component';
import { AppIndividualColumnFilteringComponent } from './app-individual-column-filtering/app-individual-column-filtering.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'zero_config',
    component: ZeroConfigComponent
  },
  {
    path: 'with_options',
    component: WithOptionsComponent
  },
  {
    path: 'with_ajax',
    component: WithAjaxComponent
  },
  {
    path: 'filter',
    component: AppIndividualColumnFilteringComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ZeroConfigComponent,
    WithOptionsComponent,
    WithAjaxComponent,
    AppIndividualColumnFilteringComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataTablesModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
