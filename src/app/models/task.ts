export class Task {
	id: number = new Date().getTime();
	text: string;
	status = 'todo';

	constructor(text: string) {
		this.text = text;
	}
}
