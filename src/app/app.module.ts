import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './features/sales/sales.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SalesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
