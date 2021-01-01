import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private map_btn_id_value = this.create_new_map();  //mapa s hodnotami:  id btn-ov a text hodnoty btn-ov

  private btn_ids = this.create_new_btn_ids();    //pole id btn-ov

  private display_style_value = "none";     //display styl pre zobrazenie lost textu
  private display_style_value_1 = "none";   //display styl pre zobrazenie win textu

  private map_btn_id_value_behaviour = new BehaviorSubject(this.map_btn_id_value);
  private pole2 = new BehaviorSubject(this.btn_ids);

  map_btn_id_value_observable = this.map_btn_id_value_behaviour.asObservable();
  btn_ids_observable = this.pole2.asObservable();

  constructor() { }

  change_map(map) {   //uprav mapu s hodnotami(id, text)
      this.map_btn_id_value_observable = map;
      this.map_btn_id_value = map;
  }

  change_btn_ids(btn_ids){  //uprav pole s btn idckami
    this.btn_ids_observable = btn_ids;
  }

  change_display_style(display_style){  
    this.display_style_value = display_style;
  }

  change_display_style_1(display_style){
    this.display_style_value_1 = display_style;
  }

    get_map(){    
        return this.map_btn_id_value;
    }

    get_display_style(){
        return this.display_style_value;
    }

    get_display_style_1(){
        if(this.get_display_style()==this.display_style_value_1 ){this.change_display_style("none")}
        return this.display_style_value_1;
    }

    reset(){
      let map_new = this.create_new_map();
      this.change_map(map_new);
      let pole_new = this.create_new_btn_ids();
      this.change_btn_ids(pole_new);
      this.change_display_style("none");
      this.change_display_style_1("none");

    }

    create_new_map(){
      return new Map([
        [ "myButton1", "N"],
        [ "myButton2", "N"],
        [ "myButton3", "N"],
        [ "myButton4", "N"],
        [ "myButton5", "N"],
        [ "myButton6", "N"],
        [ "myButton7", "N"],
        [ "myButton8", "N"],
        [ "myButton9", "N"],
    ]);
    }

    create_new_btn_ids(){
      return ['myButton1','myButton2','myButton3','myButton4','myButton5','myButton6','myButton7','myButton8','myButton9'];
    }
}