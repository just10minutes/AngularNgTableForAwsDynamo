import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableService } from './table/table.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
