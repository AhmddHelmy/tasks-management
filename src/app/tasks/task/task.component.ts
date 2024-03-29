import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() toggleCompletion: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteTask: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  onToggleCompletion(): void {
    this.toggleCompletion.emit();
  }

  onDeleteTask(): void {
    this.deleteTask.emit();
  }
}
