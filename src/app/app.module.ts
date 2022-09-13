import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import {MatMenuModule} from '@angular/material/menu';
import { IconsComponent } from './Components/icons/icons.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AuthguardServiceService } from './Services/authguardService/authguard-service.service';
import { Demo1Component } from './Components/demo1/demo1.component';
import { Demo2Component } from './Components/demo2/demo2.component';
import { FilterPipe } from './Pipe/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashBoardComponent,
    DisplayNoteComponent,
    GetAllNotesComponent,
    CreateNoteComponent,
    IconsComponent,
    ArchiveNotesComponent,
    TrashNotesComponent,
    UpdateNoteComponent,
    Demo1Component,
    Demo2Component,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
