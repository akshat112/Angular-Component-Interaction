import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiblingInteractionService {

  constructor() { }

  getDetails(){
    return [
      {name: "Akshat", age: 20},
      {name: "Sarthak", age: 19}
    ];
  }
}
