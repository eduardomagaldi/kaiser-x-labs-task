import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskDataService } from '../../services/task-data.service';
import { Task } from '../../models/task';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
	@Input() task: Task;
	@Output() deleteTaskStart: EventEmitter<Task> = new EventEmitter();

	constructor(
		private taskDataService: TaskDataService
	) {
	}

	ngOnInit() {
	}

	onTaskClick() {
		const task = {
			...this.task
		};

		task.status = task.status === 'todo' ? 'done' : 'todo';

		this.taskDataService.setTask(task);
	}

	deleteTask(task: Task) {
		if (task.status === 'done') {
			this.taskDataService.deleteTask(task);
		} else {
			this.deleteTaskStart.emit(task);
		}
	}

	onKey(event) {
		if (event.code === 'Space' || event.code === 'Enter') {
			this.onTaskClick();
		}

		if (event.code === 'Backspace' || event.code === 'Delete') {
			this.deleteTask(this.task);
		}
	}
}
