import { Component, OnInit } from '@angular/core';
import { Employee } from "./../../models/employee";
import { EmployeeService } from "./../../services/employee.service";

/**
Defines the Route object that maps a URL path to a component,
and the RouterOutlet directive that you use to place a routed view in a template,
as well as a complete API for configuring, querying, and controlling the router state.
 */
import { Router } from "@angular/router";

//generated from the command ng g c employee-list in the app folder

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

	employees: Employee[];

	constructor(private employeeService: EmployeeService, private router: Router) { }

	ngOnInit(): void {
		this.getEmployees();
	}

	private getEmployees() {

		/**
		Observable.subscribe
		Le point commun entre tous les "observables" est la méthode subscribe qui permet de souscrire à un Observable 
		et être notifié des nouvelles valeurs, des erreurs ou de la fin du "stream".
		import { interval } from 'rxjs';
		​
		const data$ = interval(1000);
		
		data$.subscribe(value => console.log(value));
		
		Nous pouvons ensuite ajouter les "callbacks" de capture d'"erreur" ou de fin du "stream" 
		en passant un objet à la méthode subscribe avec les trois callbacks suivantes : next, error et complete.
		
		data$.subscribe({
			next: value => console.log(value),
			error: err => console.error(err),
			complete: () => console.log('DONE!')
		});		
		*/
		this.employeeService.getEmployeesList().subscribe(data => {
			this.employees = data;
		})
	}

	employeeDetails(id: number) {
		this.router.navigate(['employee-details', id]);
	}
	
	updateEmployee(id: number) {
		this.router.navigate(['update-employee', id]);
	}

	deleteEmployee(id:number) {
		this.employeeService.deleteEmployee(id).subscribe( data => {
			console.log(data);
			this.getEmployees();
		})
	}

}
