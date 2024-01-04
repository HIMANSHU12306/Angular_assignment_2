import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  
  activeToInActiveCounter=0;
  inActiveToActiveCounter=0;
  constructor() { }
incrementActiveToInActive(){
  this.activeToInActiveCounter++;
  console.log('Active to Inactive : '+this.activeToInActiveCounter);
}
incrementInActiveToActive(){
  this.inActiveToActiveCounter++;
  console.log('Inactive to Active'+this.inActiveToActiveCounter);
}
}

