import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  //constructor(private router: Router)
}
