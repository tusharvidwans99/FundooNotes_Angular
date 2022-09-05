import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';


const routes: Routes = [
  {path:'Register',component: RegisterComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'DashBoard', component: DashBoardComponent,
  children:[
    {path:"",redirectTo:"/DashBoard/Notes",pathMatch:'full'},
      {path:"Notes", component:GetAllNotesComponent},
      {path:"Trash", component:TrashNotesComponent},
      {path:"Archive", component:ArchiveNotesComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
