import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';
import { FaultModule } from './fault.module';

import { AppComponent } from './app.component';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';

import { environment as env } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    !env.production ? StoreDevtoolsModule.instrument({ name: 'NgRx Book Store DevTools', }) : [],
    FaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
