import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../service/role.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email:string=""

  submitted = false;
  dbUser:User=new User;
  user={
    email:'',
    password:''
  }
constructor(private route: ActivatedRoute,private roleService: RoleService,private userService:UserService,
    private router: Router) { 
  }
  ngOnInit(): void {
    
  }

onSubmit() { this.submitted = true;
    console.log("test")
    // Validate password for empty or whitespace
    if (this.user.password === '' || this.user.password.trim().length === 0) {
      alert('Password field should not be empty');
      this.resetform()
      return;
    }
    // Proceed with the login process
    this.login(this.user.email);  
}
 login(email:string) {
 this.userService.getUserByEmail(email)
    .subscribe(data => {
      console.log(data)
      this.dbUser=data
      if(data==null){
        alert("User does not exist");
        this.resetform()
      }else{
      if(this.dbUser.password=== this.user.password && this.user.password.length > 0){
        this.gotoList(this.dbUser.role.id)
      }else{
        alert("Wrong Password")
        this.resetform()
      }
    }}, error => console.log(error));
}
resetform(){
this.user.email="";
        this.user.password="";
        this.gotoLogin()
}

  gotoList(role:number) {
    this.router.navigate(['/food-list',role]);
  }
  gotoLogin() {
  this.router.navigate(['/login']);
}
}


