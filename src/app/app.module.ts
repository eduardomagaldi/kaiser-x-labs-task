import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
	declarations: [
		AppComponent,
		OverviewComponent,
		AddTaskComponent,
		TaskComponent,
		AutoFocusDirective,
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
