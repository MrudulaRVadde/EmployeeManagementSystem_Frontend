import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    employees:any;

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  }

  button(){
    this.employees=this.service.getEmployee().subscribe(data=>this.employees=data);
  }

}