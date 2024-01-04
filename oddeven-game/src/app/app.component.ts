import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../odd/odd.component';
import { GameControlComponent } from '../gamecontrol/gamecontrol.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,EvenComponent,OddComponent,GameControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
  title = 'eogame';
  numbers:any=[]

  onNumberGenerated(e:number){
    this.numbers.push(e)
    console.log(e)
  }
}

