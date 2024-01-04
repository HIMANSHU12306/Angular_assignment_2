import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  standalone: true,
  imports: [],
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})

export class OddComponent implements OnInit {
  @Input() number: any;

  constructor() {}

  ngOnInit() {}
}
