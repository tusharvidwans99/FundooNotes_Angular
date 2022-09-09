import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from '../../Services/noteservice/note.service';
import { ArchiveNotesComponent } from '../archive-notes/archive-notes.component';
import { TrashNotesComponent } from '../trash-notes/trash-notes.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() NoteList: any;
  @Input() noteObj: any;


  @Output() archiveEvent = new EventEmitter<string>();
  @Output() TrashEvent = new EventEmitter<string>();
  @Output() UnarchiveEvent = new EventEmitter<string>();
  @Output() DeleteEvent = new EventEmitter<string>();
  @Output() ColorEvent = new EventEmitter<string>();


  isDisplaynoteComponent=false;
  isArchiveComponent=false;
  isTrashComponent=false;


  colors = [{code:"#ffffff", name:"White"},{code:"#FF6347", name:"Orange"},{code:"#FF4500", name:"Red"},{code:"#FFFF00", name:"Yellow"},{code:"#ADFF2F", name:"Green"},{code:"#43C6DB", name:"Blue"},
  {code:"#728FCE", name:"Teal"},{code:"#2B65EC", name:"DarkBlue"},{code:"#D16587", name:"Purple"},{code:"#F9A7B0", name:"Pink"},{code:"#E2A76F", name:"Brown"},{code:"#D3D3D3", name:"Gray"}];

  constructor(private note: NoteService, private route: ActivatedRoute, private Route: Router) { }

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
    this.archiveEvent.emit(request);
  }, (error: any) => {
    console.log(error);
  })
}


Unarchive(){
  console.log(this.noteObj.noteID);
  
  this.note.ArchiveNotes(this.noteObj.noteID).subscribe((request:any) => {
    console.log("Note Unarchived Successfuly", request.data);
    this.UnarchiveEvent.emit(request);
  }, (error: any) => {
    console.log(error);
  })
  // this.Route.navigateByUrl('DashBoard/Archive')
}



Trash(){

  console.log(this.noteObj.noteID);
  
  this.note.TrashNotes(this.noteObj.noteID).subscribe((request:any) => {
    console.log("Note Trashed Successfuly", request.data);
    // this.note.getallNote();
    this.TrashEvent.emit(request);
  }, (error: any) => {
    console.log(error);
  })


}


delete(){
  console.log(this.noteObj.noteID);
  
  this.note.DeleteNote(this.noteObj.noteID).subscribe((request:any) => {
    console.log("Note Deleted Successfully", request.data);
    // this.note.getallNote();
    this.DeleteEvent.emit(request);
  }, (error: any) => {
    console.log(error);
  })

}



setColor(color:any){
console.log(color);

  this.note.Changecolor(this.noteObj.noteID, color).subscribe((request:any)=>{
    console.log("Color changed successfully", request.data);
    this.ColorEvent.emit(request);
  },(error:any)=>{
    console.log(error);
    
  });

}

}
