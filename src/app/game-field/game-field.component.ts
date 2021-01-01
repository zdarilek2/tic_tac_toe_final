import { Component,  OnInit } from '@angular/core';
import { DetectWinnerComponent } from '../detect-winner/detect-winner.component';
import { DataService } from "../data.service";


@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {
  public map_btn_id_value = new Map<String, String>();  //mapa s hodnotami:  id btn-ov a text hodnoty btn-ov
  public btn_ids = Array<string>();   //pole id btn-ov
  public detect_winner_component;   //instancia triedy DetectWinnerComponent

  
  constructor(private data: DataService) {}

  ngOnInit(): void {

    this.data.map_btn_id_value_observable.subscribe(map => this.map_btn_id_value=map);
    this.data.btn_ids_observable.subscribe(pole => this.btn_ids=pole);
    this.detect_winner_component = new DetectWinnerComponent(this.data);
    
  }


  onClickMe(id){
    let box_value: String;    //hodnota policka (bud N alebo O,X)
    
    for (let map_element of this.map_btn_id_value.entries()){ 

      if(map_element[0]==id){
        box_value = map_element[1];
      }

    }

    if(box_value == "N"){
      this.map_btn_id_value.set(id,"X");
      this.set_button_text_value(id,"X");
      this.data.change_btn_ids(this.map_btn_id_value);
      this.delete_from_btn_ids(id);

      if(this.btn_ids.length>1) { this.bot(); }
    }
    
   this.detect_winner_component.detect_winner();
   
  }

  set_button_text_value(id,value){    
    let btnsend = document.getElementById(id); 
    btnsend.innerText = value;
  }


  delete_from_btn_ids(id){    //vymazanie prvku z pola idciek
    let ix = 0;
    for (let i = 0; i<this.btn_ids.length;i++){
      if (this.btn_ids[i]==id){
        ix=i;
      }
    }
    delete this.btn_ids[ix];
    this.btn_ids = this.btn_ids.filter(item=>item);
    this.data.change_btn_ids(this.btn_ids);
  }


  bot(){  //nahodny vyber policka + zapisanie hodnoty
    let v = Math.floor(Math.random() * this.btn_ids.length);

    if (this.map_btn_id_value.get(this.btn_ids[v]) != 'N'){
      delete this.btn_ids[v];
      this.btn_ids = this.btn_ids.filter(item=>item);
      this.data.change_display_style(this.btn_ids);
      this.bot()
    }
    
    else if (this.map_btn_id_value.get(this.btn_ids[v]) == 'N'){
      document.getElementById(this.btn_ids[v]).innerText = "O";
      this.map_btn_id_value.set(this.btn_ids[v],"O");
      delete this.btn_ids[v];
      this.btn_ids = this.btn_ids.filter(item=>item);

      this.data.change_btn_ids(this.map_btn_id_value);
      this.data.change_display_style(this.btn_ids);
    }
  }

  repair_btn_ids(){
    this.btn_ids=['myButton1','myButton2','myButton3','myButton4','myButton5','myButton6','myButton7','myButton8','myButton9'];
    this.data.change_btn_ids(this.btn_ids);
  }



  reset(){
    this.data.reset();  //reset zdielanych dat
    this.local_reset(); //reset lokalnych dat
  }

  local_reset(){
    if(!(this.map_btn_id_value == this.data.get_map())){
      this.map_btn_id_value = this.data.get_map();
      this.repair_btn_ids();

      for (let i = 0; i <9; i++){   //vycistenie btn-ov
        this.set_button_text_value(this.btn_ids[i]," ");
      }

    }
  }
}

