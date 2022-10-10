import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empForm: FormGroup;
  showModal: boolean = false
  editMode: boolean = false
  employees: Employee[]
  constructor(private fb: FormBuilder, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.empForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      department: ['', Validators.required],
      joining: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  getEmployees() {
    this.empService.getEmployeeList().subscribe((res: Employee[]) => {
      console.log(res)
      this.employees = res
    })
  }
  onEmpSubmit() {
    if (this.editMode) {
      this.empService.updateEmployee(this.empForm.value).subscribe(
        res => {
          this.getEmployees()
          this.onCloseModal()
        }, err => {
          console.log(err)
        }
      )
    }
    else {
      this.empService.addEmployee(this.empForm.value).subscribe(
        res => {
          console.log(res)
          this.getEmployees()
          this.onCloseModal()
        }, err => {
          console.log(err)
        }
      )
    }
  }
  onAddEmployee() {
    this.showModal = true;
    this.editMode=false;
    this.empForm.reset();

  }
  onCloseModal() {
    this.showModal = false
  }
  onDeleteEmployee(id: any) {
    if (confirm('Are you sure you want to delete')) {
      this.empService.deleteEmployee(id).subscribe(
        res => {
          console.log(res)
          this.getEmployees()
        },
        err => {
          console.log(err)
        })
    }
  }
  onEditEmployee(emp: Employee) {
    this.editMode = true
    this.showModal = true
    this.empForm.patchValue(emp)
  }
}
