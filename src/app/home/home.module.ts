import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route, RouterModule } from '@angular/router';
import { UIModule } from '@core/components/ui.module';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class HomeModule { }
