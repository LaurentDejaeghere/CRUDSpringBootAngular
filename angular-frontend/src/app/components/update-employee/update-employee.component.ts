import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { ActivatedRoute, Router } from '@angular/router';


//generated from the command ng g c update-employee in the app folder

@Component({
	selector: 'app-update-employee',
	templateUrl: './update-employee.component.html',
	styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

	id: number;
	employee: Employee = new Employee();
	constructor(private employeeService: EmployeeService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {

/**
ActivatedRoute : 
Provides access to information about a route associated with a component that is loaded in an outlet.
Use to traverse the RouterState tree and extract information from nodes.
*/
		this.id = this.route.snapshot.params['id'];

		this.employeeService.getEmployeeById(this.id).subscribe(data => {
			this.employee = data;
		}, error => console.log(error));
	}

	onSubmit() {
		this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
			this.goToEmployeeList();
		}
			, error => console.log(error));
	}

	goToEmployeeList() {
		this.router.navigate(['/employees']);
	}
}