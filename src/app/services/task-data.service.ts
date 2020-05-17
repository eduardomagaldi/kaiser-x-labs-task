import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
	providedIn: 'root'
})
export class TaskDataService {
	$taskList: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(null);
	$a: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(null);

	constructor() {
		this.getAllTasks();

		this.$taskList.subscribe((taskList) => {
			if (taskList !== null) {
				localStorage.setItem('tasks', JSON.stringify(taskList));
			}
		});
	}

	get taskList(): Task[] {
		return this.$taskList.getValue();
	}

	getAllTasks(): void {
		const taskList = JSON.parse(localStorage.getItem('tasks'));

		this.$taskList.next(taskList || []);
	}

	createTask(text: string): void {
		const task = new Task(text);
		let taskList = this.taskList ? this.taskList.slice() : [];

		taskList.push(task);
		taskList = taskList.sort(this.sortTasks);

		this.$taskList.next(taskList);
	}

	setTask(task: Task) {
		let taskList = this.taskList.slice();
		let index: number;

		taskList.find((t: Task, i: number) => {
			if (t.id === task.id) {
				index = i;
				return true;
			}
		});

		taskList[index] = task;
		taskList = taskList.sort(this.sortTasks);

		this.$taskList.next(taskList);
	}

	sortTasks(a: Task, b: Task) {
		if (a.status !== 'done' && b.status === 'done') {
			return -1;
		}

		if (a.status === 'done' && b.status !== 'done') {
			return 1;
		}

		if ((a.id > b.id)) {
			return -1;
		}

		if (a.id < b.id) {
			return 1;
		}

		return 0;
	}

	deleteTask(task: Task): void {
		task.status = 'deleted';

		this.setTask(task);
	}
}
