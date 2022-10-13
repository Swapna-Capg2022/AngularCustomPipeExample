import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   students: any[] = [
    {
      ID : 'std101',Name:'Rama',
      DOB: '12/8/1998',Gender:'Male',CourseFee:4501.23
    },
    {
      ID : 'std102',Name:'Raja',
      DOB: '12/8/1997',Gender:'Male',CourseFee:3501.23
    },
    {
      ID : 'std103',Name:'Raga',
      DOB: '12/8/1996',Gender:'Female',CourseFee:6501.23
    },
    {
      ID : 'std104',Name:'Rana',
      DOB: '12/8/1998',Gender:'Male',CourseFee:5501.23
    }
   ]
}
