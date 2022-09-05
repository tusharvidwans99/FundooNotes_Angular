import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../../Services/noteservice/note.service';
// import {GetNotes} from '../get-all-notes/get-all-notes.component'

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
  
  createNoteForm!: FormGroup;
  submitted = false;
  notecard: boolean=false;
  color!:string;

  constructor(private formBuilder: FormBuilder, private note: NoteService) { }

  
  
  ngOnInit(): void {
    this.createNoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
  });
  }

  get f() { return this.createNoteForm.controls; }
 

  onSubmit() {
    this.notecard=false;
    this.submitted = true;

    // stop here if form is invalid
    if (this.createNoteForm.invalid) {
        return;
    }
    console.log(this.createNoteForm.value);
    let reqdata={
      title: this.createNoteForm.value.title,
      description: this.createNoteForm.value.description,
      color: this.createNoteForm.value.color,
    }

    this.note.createNote(reqdata).subscribe((response:any)=>{
      console.log(response)
      this.note.getallNote();
    }, (error: any) => {
      console.log(error);
    })
   this.onReset();
}
 
onReset() {
  this.submitted = false;
  this.createNoteForm.reset();
}

openNoteCard(): void{
  this.notecard=true;
}

closecard():void{
  this.notecard=false;
}

onColorselect(color:string)
{
  this.color=color;
}

}
