import { Component , OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active.component.html',
  styleUrl: './active.component.css'
})
export class ActiveComponent implements OnInit {
  users: string[] | undefined;
    constructor(private userService:UsersService ) { }
  
    ngOnInit() {
      this.users=this.userService.activeUsers;
    }
  
   
  
    onSetToInactive(id: number) {
      this.userService.setToInActive(id);
    }
  }


