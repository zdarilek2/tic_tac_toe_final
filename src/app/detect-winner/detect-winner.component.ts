import { Component, Input,  OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-detect-winner',
  templateUrl: './detect-winner.component.html',
  styleUrls: ['./detect-winner.component.css']
})
export class DetectWinnerComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {}

  make_visible_lost_text(){      //zviditelni text pri prehre 
      let change_display_style_1 = {
        'display': this.data.get_display_style()
      };
      return change_display_style_1;
  }

  make_visible_win_text(){    //zviditelni text pri vyhre
    let change_display_style = {
      'display': this.data.get_display_style_1()
    };
    return change_display_style;
  }

  detect_winner(){   //spusti kontrolu pola na zistenie 3 rovnakych znakov vedla seba...
    this.check_diagonal();  
    this.check_columns();
    this.check_lines();
  }

  check_diagonal(){   //kontrola znakov na diagonale   
    let first_diagonal = Array<String>(); //pole na data s prvej diagonaly
    let second_diagonal = Array<String>(); //pole na data s druhej diagonaly
    let box_from_field_index = 0;         
    
    for (let entry of this.data.get_map()){

      if(box_from_field_index==0 || box_from_field_index==4 || box_from_field_index == 8){
        first_diagonal.push(entry[1]);
      }

      if(box_from_field_index==2 || box_from_field_index==4 || box_from_field_index == 6){
        second_diagonal.push(entry[1]);
      }

      box_from_field_index++;

    }
          
    if(first_diagonal[0]== first_diagonal[1] && first_diagonal[0]== first_diagonal[2] && first_diagonal[0]!== "N"){ //kontrola zhody znakov na prvej diagonale
 
      this.check_who_win(first_diagonal);

    }

    if(second_diagonal[0]== second_diagonal[1] && second_diagonal[0]== second_diagonal[2] && second_diagonal[0]!== "N"){ //kontrola zhody znakov na druhej diagonale
      
      this.check_who_win(second_diagonal);

    }

  }

  check_columns(){  //kontrola znakov v stlpci
    let first_column = Array<String>();  //pole na data z prveho stlpca
    let second_column = Array<String>();  //pole na data z druheho stlpca
    let third_column = Array<String>();   //pole na data z tretieho stlpca
    let box_from_field_index = 0;
    
    for (let entry of this.data.get_map()){

      if(box_from_field_index==0 || box_from_field_index==3 || box_from_field_index==6){  //kontrola zhody znakov v prvom stlpci
        first_column.push(entry[1]);
      }
      if(box_from_field_index==1 || box_from_field_index==4 || box_from_field_index==7){  //kontrola zhody znakov v druhom stlpci
        second_column.push(entry[1]);
      }
      if(box_from_field_index==2 || box_from_field_index==5 || box_from_field_index==8){  //kontrola zhody znakov v tretom stlpci
        third_column.push(entry[1]);
      }

      box_from_field_index++;
  }

  if(first_column[0]== first_column[1] && first_column[0]== first_column[2] && first_column[0]!== "N"){
    this.check_who_win(first_column);
  }

  if(second_column[0]== second_column[1] && second_column[0]== second_column[2] && second_column[0]!== "N"){
    this.check_who_win(second_column);
  }

  if(third_column[0]== third_column[1] && third_column[0]== third_column[2] && third_column[0]!== "N"){
    this.check_who_win(third_column);
  }

}

  check_lines(){    //kontrola znakov v riadkoch
    let first_line = Array<String>();   //pole na data z prveho riadka
    let second_line = Array<String>();  //pole na data z druheho riadka  
    let third_line = Array<String>();   //pole na data z tretieho riadka
    let box_from_field_index = 0;

    for (let entry of this.data.get_map()){

      if(box_from_field_index==0 || box_from_field_index==1 || box_from_field_index==2){
        first_line.push(entry[1]);
      }
      if(box_from_field_index==3 || box_from_field_index==4 || box_from_field_index==5){
        second_line.push(entry[1]);
      }
      if(box_from_field_index==6 || box_from_field_index==7 || box_from_field_index==8){
        third_line.push(entry[1]);
      }

      box_from_field_index++;

  }

    if(first_line[0]== first_line[1] && first_line[0]== first_line[2] && first_line[0]!== "N"){
      this.check_who_win(first_line);
    }

    if(second_line[0]== second_line[1] && second_line[0]== second_line[2] && second_line[0]!== "N"){
      this.check_who_win(second_line);
    }

    if(third_line[0]== third_line[1] && third_line[0]== third_line[2] && third_line[0]!== "N"){
      this.check_who_win(third_line);
    }

  }


  check_who_win(box_array){   //skontroluje ci vyhrala O alebo X

    if(box_array[0]=="O"){
      this.data.change_display_style("block");
    }
    if(box_array[0]=="X"){
      this.data.change_display_style_1("block");
    }

  }

}

