import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


interface SalesDetails{
  productname:string;
  productquantity:number;
  productMade:string
}
interface PaymentDetails{
 Price:number;
 HolderName:string;
 HolderMobile:number;
 status:string;
}
@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.scss']
})
export class ShadowComponent {
  constructor(
    private Http:HttpClient
  ){
    console.log("Constructor loaded");
  }
  title = 'ng-app';
sales:boolean=false;
payments:boolean=false;
showSales1:boolean=false;
showPayment1:boolean=false;
showSales(){
this.sales=!this.sales;
this.payments=false;
}
showPayments(){
this.payments=!this.payments;
this.sales=false;
}
salesDetails:SalesDetails[]=[
  {
    productname:"Lenovo",
    productquantity:20,
    productMade:"China"
  },{
    productname:"Rin Powder",
    productquantity:23,
    productMade:"India"
  },{
    productname:"Tomato",
    productquantity:12,
    productMade:"Coimbatore"
  }
];
originalSaleDetails:SalesDetails[]=this.salesDetails;

payment:PaymentDetails[]=[
  {
    Price:230,
    HolderName:"Kavyaa Ganesan",
    HolderMobile:9361210718,
    status:"Paid"
  },
  {
    Price:210,
    HolderName:"Sabaris Ganesan",
    HolderMobile:9865540849,
    status:"Inprogress"
  },{
    Price:300,
    HolderName:"Ravina Chidambaram",
    HolderMobile:9994210292,
    status:"UnPaid"
  }
];

originalPaymentDetails:PaymentDetails[]=this.payment;

salesData!:SalesDetails;
 getSalesDetails(sales:SalesDetails){
  this.salesData = sales;
  // this.paymentData=!this.paymentData;
 }
paymentData!:PaymentDetails;
getPaymentDetails(payment:PaymentDetails){
this.paymentData=payment;
}
resetData(){
this.sales=false;
this.payments=false;
}
search(e: any) {
console.log("search value ==>", e);
console.log('value -->', e.target.value);
console.log(' sales details -->', this.salesDetails);
if (this.sales) {
  let filteredData = this.originalSaleDetails
    .filter((sd: SalesDetails) =>
      (sd.productname).toLowerCase().includes(e.target.value) ||
      (sd.productMade).toLowerCase().includes(e.target.value) ||
      (sd.productquantity).toString() === (e.target.value));
  console.log('filtered data -->', filteredData);
  this.salesDetails=filteredData;

}
}
}