import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  childToParent(){
    this.childEmitter.emit("Hello from child");
  }
}
