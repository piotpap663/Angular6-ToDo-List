import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskList: Array<string> = [];
  taskDone: Array<string> = [];

  add(task: string): void {
    if (task.length) {
      if (this.taskList.indexOf(task) === -1) {
        this.taskList.push(task);
        task = '';
      } else {
        alert('Takie zadanie juz istnieje.');
      }
    }
  }

  remove(task: string): void {
    this.taskList = this.taskList.filter(e => e !== task);
  }

  done(task: string): void {
    this.taskDone.push(task);
    this.remove(task);
  }
}
