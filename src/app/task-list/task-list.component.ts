import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input()
  taskList: Array<string> = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  remove(task: string): void {
    this.emitRemove.emit(task);
  }
  done(task: string): void {
    this.emitDone.emit(task);
  }
}
