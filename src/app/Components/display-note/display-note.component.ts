import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { DataServiceService } from 'src/app/Services/dataservice/data-service.service';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() NoteList:any;

  @Output() archiveEvent = new EventEmitter<string>();
  @Output() TrashEvent = new EventEmitter<string>();
  @Output() UnarchiveEvent = new EventEmitter<string>();
  @Output() DeleteEvent = new EventEmitter<string>();
  @Output() ColorEvent = new EventEmitter<string>();

  Searchtitle:string = '';
  notedata:any;

  constructor(public dialog: MatDialog, private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message =>{
      console.log(message)
      this.Searchtitle=message
    } )
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


  archiveMessage(event:any){
    this.archiveEvent.emit("Reload Archive event")
  }

  trashMessage(event:any){
    this.TrashEvent.emit("Reload Page after trash")
  }

  unarchiveMessage(event:any){
    this.UnarchiveEvent.emit("Reload page after unarchive")
  }

  deleteMessage(event:any){
    this.DeleteEvent.emit("Reload page after delete");
  }

  colorMessage(event:any){
    this.ColorEvent.emit("Reload page after colorchanges");
  }

}
