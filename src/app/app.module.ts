import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { DetectWinnerComponent } from './detect-winner/detect-winner.component';
import { GameFieldComponent } from './game-field/game-field.component';
import { HelpModalComponent } from './help-modal/help-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DetectWinnerComponent,
    GameFieldComponent,
    HelpModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
