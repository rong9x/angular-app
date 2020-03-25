import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@Injectable()
export class Throttle {
  resolve() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'nyan',
        loadChildren: () => import('./nyan/nyan.module').then(m => m.NyanModule),
        // Introduced for an artificial delay
        resolve: {
          Throttle
        }
      }
    ])
  ],
  providers: [Throttle],
  bootstrap: [AppComponent]
})
export class AppModule { }
