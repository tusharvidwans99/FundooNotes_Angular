import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../../Services/noteservice/note.service';


@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  
  archiveNotes : any;
  isArchive = false;
  @Input() NoteList : any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllArchiveNotes()
  }

  getAllArchiveNotes(){
    this.note.getallNote().subscribe((request:any) =>{
      console.log("request data ",request.data);
      this.archiveNotes = request.data;
      this.archiveNotes=this.archiveNotes.filter((obj:any)=>{
        return obj.archive == true && obj.trash == false;
      })
      console.log(this.archiveNotes);
      console.log(this.archiveNotes.reverse());
      // this.archiveNotes
      return this.archiveNotes;
    })
  }


}
