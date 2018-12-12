import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CategoriesComponent } from './headerchunk/categories/categories.component';
import { SearchComponent } from './headerchunk/search/search.component';
import { InstructorComponent } from './headerchunk/instructor/instructor.component';
import { CartComponent } from './headerchunk/cart/cart.component';
import { LoginComponent } from './headerchunk/login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent,
    SearchComponent,
    InstructorComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    HeaderComponent
  ]
})
export class HeaderModule { }
