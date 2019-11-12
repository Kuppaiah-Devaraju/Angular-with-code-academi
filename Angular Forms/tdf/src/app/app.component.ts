import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','java','mongodb','springboot'];
  userModel=new User('', 1,'a@gmail.com','default',"5",true);
  topichasError=true;
  validateTopic(value){
if(value=='default'){
  this.topichasError=true;
}else{
  this.topichasError=false;
}
  }
constructor(private _enrollmentService:EnrollmentService){

}
  onSubmit(){
this._enrollmentService.enroll(this.userModel)
  .subscribe(
    data=>console.log("success"),
    error=>console.log("error",error)
  );

  }
}
