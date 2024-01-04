import { Component, Input ,OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  standalone: true,
  imports: [],
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})

export class EvenComponent implements OnInit {
  @Input() number: any;

  constructor() {}

  ngOnInit() {}
}




