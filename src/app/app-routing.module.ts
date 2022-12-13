import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing';
import { FeaturesComponent } from './features';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'features', component: FeaturesComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
