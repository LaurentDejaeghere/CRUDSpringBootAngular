import { Component, OnInit } from '@angular/core';
import { Employee } from './../../models/employee';
import { EmployeeService } from './../../services/employee.service';
import { Router } from '@angular/router';

//generated from the command ng g c create-employee in the app folder

@Component({
	selector: 'app-create-employee',
	templateUrl: './create-employee.component.html',
	styleUrls: ['./create-employee.component.scss']
})

export class CreateEmployeeComponent implements OnInit {

	employee: Employee = new Employee();
	constructor(private employeeService: EmployeeService,
		private router: Router) { }

	ngOnInit(): void {
	}

	saveEmployee() {
		this.employeeService.createEmployee(this.employee).subscribe(data => {
			console.log(data);
			this.goToEmployeeList();
		},
			error => console.log(error));
	}

	goToEmployeeList() {
		this.router.navigate(['/employees']);
	}

	onSubmit() {
		console.log(this.employee);
		this.saveEmployee();
	}
}
