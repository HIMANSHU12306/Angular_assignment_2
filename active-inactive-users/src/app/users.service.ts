import { Injectable } from '@angular/core';
import{CounterService} from './counter.service';

@Injectable()
export class UsersService {

  activeUsers = ['DEVANSH', 'HIMANSHU','RAHUL'];
  inactiveUsers = ['DEEPANSHI', 'ARJUN','DEEPAK'];
  
  active: string[] | undefined;
  inactive: string[] | undefined;
  counterService: any;

  constructor(_counterService:CounterService) { }
  setToActive(id:number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
    this.counterService.incrementInActiveToActive();
  }
  setToInActive(id:number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.counterService.incrementActiveToInActive();
  }
}

