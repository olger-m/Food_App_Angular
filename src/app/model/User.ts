import { Role } from "./Role";

export class User {
  id :number=0;
  firstName: string="";
  lastName: string="";
  emailId: string="";
  password: string="";
  role: Role={
    id: 0,
    role: ""
  };
  active: boolean=false;
}
