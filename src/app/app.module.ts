import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './page/dashboard-page/dashboard-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { AboutComponent } from './page/about/about.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { UpdateProductComponent } from './page/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    ProductPageComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    HomePageComponent,
    ProductDetailComponent,
    AboutComponent,
    AddProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
