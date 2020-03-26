import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'nyan', loadChildren: () => import('./nyan/nyan.module').then(m => m.NyanModule) },
{ path: 'edra', loadChildren: () => import('./edra/edra.module').then(m => m.EdraModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
