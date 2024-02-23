import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrower-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './borrower-register.component.html',
  styleUrl: './borrower-register.component.css'
})
export class BorrowerRegisterComponent implements OnInit{
  

  private http:HttpClient;
  countryList:any;
  selectedCountry:any;

  borrower=
  {
    firstName:null,
    lastName:null,
    dob:null,
    email:null,
    contactNumber:null
  }

  constructor(private httpClient:HttpClient){
      this.http=httpClient;
  }
  
  ngOnInit(): void {
      this.getCountryList();
  }

  getCountryList(){
      this.http.get("https://restcountries.com/v3.1/all").subscribe((list)=>{
          this.countryList=list;
          console.log(this.countryList);
      })
  }

  setSelectedCountry(country:any){
      this.selectedCountry=country;
  }

  saveBorrower(){
    if(this.borrower.firstName !== null && this.borrower.lastName !== null && this.borrower.dob !== null && this.borrower.email !== null && this.borrower.contactNumber !== null){
      let postApi="http://localhost:8081/borrower/add";  
      this.http.post(postApi,this.borrower,{responseType:`text`}).subscribe((response)=>{
          console.log(response);
          this.successfullAlert(response);
          this.borrower.firstName=null;
          this.borrower.lastName=null;
          this.borrower.dob=null;
          this.borrower.email=null;
          this.borrower.contactNumber=null;
      })
    }else{
        this.warningAlert();
    }
  }


  successfullAlert(response:string){
    Swal.fire({
      title: "Saved!",
      text: response,
      icon: "success"
    });
  }

  warningAlert(){
    Swal.fire({
      title: "Enter All Details!",
      text: "You're not complete the form!",
      icon: "warning"
    });
  }

}

