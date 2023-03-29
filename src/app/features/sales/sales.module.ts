import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsComponent } from './components/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    BannerComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports:[
    BannerComponent,
    ProductsComponent
  ]
})
export class SalesModule { }
