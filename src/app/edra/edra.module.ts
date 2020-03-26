import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EdraComponent } from './edra.component';



@NgModule({
  declarations: [EdraComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      pathMatch: 'edra',
      component: EdraComponent
    }])
  ]
})
export class EdraModule { }
