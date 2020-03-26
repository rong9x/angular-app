import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdraComponent } from './edra.component';

const routes: Routes = [{ path: '', component: EdraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdraRoutingModule { }
