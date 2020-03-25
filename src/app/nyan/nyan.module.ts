import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NyanComponent } from './nyan.component';



@NgModule({
  declarations: [NyanComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: NyanComponent
    }])
  ]
})
export class NyanModule { }
