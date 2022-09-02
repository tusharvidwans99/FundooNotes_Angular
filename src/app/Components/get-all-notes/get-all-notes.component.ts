import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  notesArray:any;
  notesData:any;


  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getallNotes();
  }

  getallNotes()
  {
    this.noteService.getallNote().subscribe((request:any) => {
      console.log("request data",request);
      this.notesArray=request.data;
      this.notesArray.reverse();
      console.log("Note Array",this.notesArray);
    }, (error: any) => {
      console.log(error);
    })
  }

}