import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../../Services/noteservice/note.service';


@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  trashNotes : any;
  @Input() NoteList : any;

  constructor(private note: NoteService) { }
  
  ngOnInit(): void {
    this.getAllTrashNotes();
  }

  getAllTrashNotes(){
    this.note.getallNote().subscribe((request:any) =>{
      console.log("request data ",request);
      this.trashNotes = request.data;
      this.trashNotes = this.trashNotes.filter((obj:any)=>{
        return obj.trash == true;
      })
      console.log(this.trashNotes);
       this.trashNotes.reverse();
      console.log(this.trashNotes.reverse());
      return this.trashNotes;
    })
  }



}
