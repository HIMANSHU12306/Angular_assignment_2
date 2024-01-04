
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ActiveComponent,InactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UsersService,CounterService]
})
export class AppComponent {
  title = 'active-inactive-users';
}
