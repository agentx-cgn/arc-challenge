import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChallengePage } from './pages/challenge/challenge.page';

const routes: Routes = [
  { path: '', component: ChallengePage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
