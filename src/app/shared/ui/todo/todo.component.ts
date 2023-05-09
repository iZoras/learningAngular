import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from 'src/app/features/todos/todos.component';



@Component({
  selector: 'shared-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
 @Input() todo?: Todos;
 @Output() handleDelete:EventEmitter<number> = new EventEmitter<number>();

 onDelete(id:number| undefined):void {
  this.handleDelete.emit(id);
 }
}
