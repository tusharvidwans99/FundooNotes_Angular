import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../../Services/noteservice/note.service';
import { ArchiveNotesComponent } from '../archive-notes/archive-notes.component';
import { TrashNotesComponent } from '../trash-notes/trash-notes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() NoteList: any;
  @Input() noteObj: any;


  isArchiveComponent=false;
  isTrashComponent=false;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }

Archive(){
  console.log(this.noteObj.noteID);
  
  this.note.ArchiveNotes(this.noteObj.noteID).subscribe((request:any) => {
    console.log("Note Archived Successfuly", request.data);
  }, (error: any) => {
    console.log(error);
  })
}

Trash(){

  console.log(this.noteObj.noteID);
  
  this.note.TrashNotes(this.noteObj.noteID).subscribe((request:any) => {
    console.log("Note Trashed Successfuly", request.data);
    this.note.getallNote();
  }, (error: any) => {
    console.log(error);
  })


}

}
