import { User } from "./User";
import { Food } from "./food";


export class Order {
  id :number=0;
  user:User;
  products:any[];
  dateOrdered?:Date;
  active: boolean=false;
}
