import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FooterComponent,
    NavbarComponent,
    ConvertToSpacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NavbarComponent,ProductListComponent,FooterComponent]
})
export class AppModule { }
