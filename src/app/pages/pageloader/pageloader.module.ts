import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageloaderPageRoutingModule } from './pageloader-routing.module';

import { PageloaderPage } from './pageloader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageloaderPageRoutingModule
  ],
  declarations: [PageloaderPage]
})
export class PageloaderPageModule {}
