import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageErrorPageRoutingModule } from './page-error-routing.module';

import { PageErrorPage } from './page-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageErrorPageRoutingModule
  ],
  declarations: [PageErrorPage]
})
export class PageErrorPageModule {}
