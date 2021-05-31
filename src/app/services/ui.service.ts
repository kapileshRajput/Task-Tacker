import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(){
    this.showAddTask = !this.showAddTask;
    // console.log(`Inside Ui-Service toggleAddTask() showAddTask: ${this.showAddTask}`)
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any>{
    // console.log(`Inside Ui-Service onToggle() showAddTask: ${this.showAddTask}`)
    return this.subject.asObservable();
  }
}
