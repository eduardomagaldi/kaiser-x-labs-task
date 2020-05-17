import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskDataService } from '../../services/task-data.service';
import { Task } from '../../models/task';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
	constructor(
		private taskDataService: TaskDataService
	) { }

	@ViewChild('buttonRef') buttonRef: ElementRef;

	taskList: Task[];
	taskToDelete: Task;
	modalOpen = false;

	ngOnInit() {
		this.taskList = this.taskDataService.taskList;

		this.taskDataService.$taskList.subscribe((taskList) => {
			this.taskList = taskList;
		});
	}

	deleteTaskStart(task) {
		this.taskToDelete = task;
		this.modalOpen = true;
		this.buttonRef.nativeElement.focus();
	}

	confirmDeleteTask() {
		this.taskDataService.deleteTask(this.taskToDelete);
		this.modalOpen = false;
	}

	closeModal() {
		this.modalOpen = false;
	}
}
