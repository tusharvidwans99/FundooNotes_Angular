import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../../Services/noteservice/note.service';
import { ArchiveNotesComponent } from '../archive-notes/archive-notes.component';
import { TrashNotesComponent } from '../trash-notes/trash-notes.component';
import { ActivatedRoute } from '@angular/router';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() NoteList: any;
  @Input() noteObj: any;

  isDisplaynoteComponent=false;
  isArchiveComponent=false;
  isTrashComponent=false;

  constructor(private note: NoteService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    
    let Comp = this.route.snapshot.component;


    if(Comp == GetAllNotesComponent)
    {
      this.isDisplaynoteComponent=true;
    }

    if(Comp == TrashNotesComponent)
    {
      this.isTrashComponent=true;
    }

    if(Comp == ArchiveNotesComponent)
    {
      this.isArchiveComponent=true;
    }


  }

Archive(){
  console.log(this.noteObj.noteID);
  
  this.note.ArchiveNotes(this.noteObj.noteID).subscribe((request:any) => {
    console.log("Note Archived Successfuly", request.data);
  }, (error: any) => {
    console.log(error);
  })
}


Unarchive(){
  console.log(this.noteObj.noteID);
  
  this.note.ArchiveNotes(this.noteObj.noteID).subscribe((request:any) => {
    console.log("Note Unarchived Successfuly", request.data);
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


delete(){
  console.log(this.noteObj.noteID);
  
  this.note.DeleteNote(this.noteObj.noteID).subscribe((request:any) => {
    console.log("Note Deleted Successfully", request.data);
    this.note.getallNote();
  }, (error: any) => {
    console.log(error);
  })

}
}
