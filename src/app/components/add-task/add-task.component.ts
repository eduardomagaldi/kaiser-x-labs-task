import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../services/task-data.service';

@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

	constructor(
		private taskDataService: TaskDataService,
	) { }

	text = '';

	ngOnInit() {
	}

	onKey(event: any): void {
		if (event.key === 'Enter' && this.text !== '') {
			this.taskDataService.createTask(this.text);

			this.text = '';
		}
	}
}
