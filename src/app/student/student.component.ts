import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  showS=false;
  S=false;
  cityList:any = [
    {
      'city':'Delhi',
      'student':[
        {
          'studentId':'S101',
          'studentName':'Yash'
        },
        {
          'studentId':'S102',
          'studentName':'Gandharv'
        },
        {
          'studentId':'S103',
          'studentName':'Vikram'
        },
        {
          'studentId':'S104',
          'studentName':'Himanshu'
        }
      ]
    },
    {
      'city':'Agra',
      'student':[
        {
          'studentId':'S105',
          'studentName':'Chandan'
        },
        {
          'studentId':'S106',
          'studentName':'Gourav'
        },
        {
          'studentId':'S107',
          'studentName':'Karnika'
        }
      ]
    },
    {
      'city':'Lucknow',
      'student':[
        {
          'studentId':'S108',
          'studentName':'Shubhanshi'
        },
        {
          'studentId':'S109',
          'studentName':'Ujaala'
        },
        {
          'studentId':'S110',
          'studentName':'Akriti'
        }
      ]
    }
  ];

  username="";

  valid() {
    if (this.username === '') {
      return true;
    }
    else return false;
  }

  count = new Array();
  i=1;
  displayClick() {
    this.count.push(this.i);
    this.i++;
  }
  display:boolean = false;
  buttonName = 'Show Details';
  toggle() {
    this.display = !this.display;
      // change button name 
      if(this.display)  
        this.buttonName = "Hide Details";
      else
        this.buttonName = "Show Details";
  }

  employee:any = [
    {
      'name':'Tomar',
      'gender':'male',
      'salary':'20000',
      'dateOfJoining':'23/9/2019',
    },
    {
      'name':'Yash',
      'gender':'male',
      'salary':'22000',
      'dateOfJoining':'23/9/2019',
    },
    {
      'name':'Shubhangi',
      'gender':'female',
      'salary':'19000',
      'dateOfJoining':'23/9/2019',
    },
    {
      'name':'Akriti',
      'gender':'female',
      'salary':'23000',
      'dateOfJoining':'23/9/2019',
    },
    {
      'name':'Chandan',
      'gender':'male',
      'salary':'18000',
      'dateOfJoining':'23/9/2019',
    },
    {
      'name':'Gandharv',
      'gender':'male',
      'salary':'21000',
      'dateOfJoining':'23/9/2019',
    }
  ];
  ename="";

  gendervalue='';
  change(inp:string){
    this.gendervalue=inp;
  }

  //super power calculator
  power="";
  factor="";
}
