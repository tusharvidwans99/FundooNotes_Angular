import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteService } from '../../Services/noteservice/note.service';


@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  notedata:any;
  updateNoteForm!: FormGroup;
  submitted = false;
  title:any;
  description:any


  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private note:NoteService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.title=this.data.title,
    this.description=this.data.description    
  }

  get f() { return this.updateNoteForm.controls; }

  onSubmit() {
    this.submitted = true;

    let updatedata={
      title: this.title,
      description: this.description,
    }
    console.log(updatedata);
    
    this.note.updateNote(updatedata, this.data.noteID).subscribe((response:any)=>{
      console.log(response)
      
   }, (error: any) => {
     console.log(error);
    })
}


}
