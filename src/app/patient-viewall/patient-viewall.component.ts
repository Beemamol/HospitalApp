import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-viewall',
  templateUrl: './patient-viewall.component.html',
  styleUrls: ['./patient-viewall.component.css']
})
export class PatientViewallComponent {
  data:any = [
{
  "Name":"Beema",
  "Designation":"Software Engineer Trainee",
  "Salary":25000,
  "Contact":98564125896,
  "Company":"NEST"  
  
},
{
  "Name":"Abinas",
  "Designation":"Software Exicutive Trainee",
  "Salary":150000,
  "Contact":98564125896,
  "Company":"JTSI"
  
},{
  "Name":"Priya",
  "Designation":"Software Exicutive ",
  "Salary":450000,
  "Contact":98564125896,
  "Company":"EY"
  
}
  ]
  

}
