import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() NoteList:any;

  notedata:any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  notecard:boolean=false;

  
  openDialog(note:any) {
    this.dialog.open(UpdateNoteComponent,{
      width: '45%',
      height: 'auto',
      autoFocus:false,
      data:note,
    });
    
    this.notecard=true;
  }


}
