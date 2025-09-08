import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component'; // ✅ import Admin Profile
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ABOUT', component: AboutComponent },
  { path: 'UPDATESTUDENT', component: UpdateStudentComponent },
  { path: 'admin-profile', component: AdminProfileComponent },       // ✅ new route
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },     // default redirect
  { path: '**', redirectTo: 'dashboard' }                       // wildcard fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
