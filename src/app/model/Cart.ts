import { CartItem } from "./cartitem";

export class Cart{
items:CartItem[]=[]

get totalPrice():number{
  let totalPrice=0;
  this.items.forEach(item=>{
    totalPrice+=item.getPrice()
  })
  return totalPrice;
}

get totalitems(){
  let totalitems=0
  this.items.forEach((item)=>{totalitems += item.quantity})
  return totalitems;
}
}