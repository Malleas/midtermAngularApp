import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {ViewResultsComponent} from "./view-results/view-results.component";

const routes: Routes = [
  {path: 'calc', component: CalculatorComponent},
  {path: 'results', component: ViewResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
