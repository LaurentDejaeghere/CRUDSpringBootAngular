import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

//generated from the command ng g c employee-details in the app folder

@Component({
	selector: 'app-employee-details',
	templateUrl: './employee-details.component.html',
	styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

	id: number
	employee: Employee
	constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

	ngOnInit(): void {
		this.id = this.route.snapshot.params['id'];

		this.employee = new Employee();
		this.employeService.getEmployeeById(this.id).subscribe(data => {
			this.employee = data;
		});
	}
}
