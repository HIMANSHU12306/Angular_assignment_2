import { Component , OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inactive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.css'
})
export class InactiveComponent implements OnInit {
  users: string[] | undefined;
    constructor(private userService:UsersService) { }
  
    ngOnInit() {
      this.users=this.userService.inactiveUsers;
    }
  
   
  
    onSetToActive(id: number) {
      this.userService.setToActive(id);
    }
  }
