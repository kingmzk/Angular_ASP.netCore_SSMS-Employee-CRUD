import { Component,OnInit  } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit{
  employees: Employee[] = [
    // {
    //   id: '1',
    //   name: 'mzk',
    //   email: 'mohammedzakriakhanz@gmail.com',
    //   phone: 9448588646,
    //   salary: 280000,
    //   department: 'Software engineer',
    // },
    // {
    //   id: '2',
    //   name: 'King mzk',
    //   email: 'mzks@gmail.com',
    //   phone: 9019108181,
    //   salary: 100000,
    //   department: 'CEO & Software engineer',
    // }
  ];

  constructor(private employeesService: EmployeesService) {
    // this.employees.push()

  }



  ngOnInit() : void {
    this.employeesService.getAllEmployees()
    .subscribe({
        next : (employees) =>{
          console.log(employees)
          this.employees = employees;
        },
        error:(response) => {
          console.log(response)
        }
    })
  }
}
