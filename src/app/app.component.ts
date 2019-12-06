import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';

  myVar:string;
  myShow(inp:any) {
    this.myVar = inp.target.value;
  }
  isValid=false;
  peopleList=[
    {
      'villainId':'V101',
      'villainName':'Kayyum kada'
    },
    {
      'villainId':'V102',
      'villainName':'Babu Jalela'
    },
    {
      'villainId':'P105',
      'villainName':'Aiyaas Takkar'
    }
  ];

  addNewRow(in1:any,in2:any) {
    let newVillian={
      'villainId':in1,
      'villainName':in2
    };
    this.peopleList.push(newVillian);
  }
  deleteNewRow(in1:any) {
    for(let i=0;i<this.peopleList.length;i++) {
      if(this.peopleList[i].villainId==in1) {
        this.peopleList.splice(i,1);
      }
    }
  }
}
