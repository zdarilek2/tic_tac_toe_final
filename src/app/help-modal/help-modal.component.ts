import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { GameFieldComponent } from '../game-field/game-field.component';
@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.css']
})
export class HelpModalComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  reset(){
    this.data.reset();
    
  }

}
