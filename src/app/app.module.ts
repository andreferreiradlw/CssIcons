import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-module';

import { AppComponent } from './app.component';
import { IconDetailsComponent } from './icon-details/icon-details.component';
import { IconFilterPipe } from './iconFilter.pipe';

@NgModule({
   declarations: [
      AppComponent,
      IconDetailsComponent,
      IconFilterPipe
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      HttpModule,
      BrowserAnimationsModule,
      MaterialModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
