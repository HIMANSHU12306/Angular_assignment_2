import { Component ,OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  standalone: true,
  imports: [],
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.css'
})
export class GameControlComponent implements OnInit {
  @Output() numberGenerated = new EventEmitter<number>();
  numbers: number = 0;
  interval: any;

  constructor() {}

  ngOnInit() {}

  start() {
    this.interval = setInterval(() => {
      this.numbers += 1;
      this.numberGenerated.emit(this.numbers);
      console.log(this.numbers)
    }, 1000);
  }

  stop() {
    //stop the timer
    console.log("stoped");
    
    clearInterval(this.interval);
  }
}
