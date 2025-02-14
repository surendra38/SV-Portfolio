import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CommonModuleClass { }
