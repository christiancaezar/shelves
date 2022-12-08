import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageloaderPage } from './pageloader.page';

const routes: Routes = [
  {
    path: '',
    component: PageloaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageloaderPageRoutingModule {}
