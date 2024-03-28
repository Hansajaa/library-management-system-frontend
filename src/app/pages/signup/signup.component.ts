import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
    
  private http:HttpClient;
  public countryList:any;
  public selectedCountry:any;
  public selectedCountryCode:string="";
  public isExistUserName:any;
  public isSaving:boolean = false;
  public newUser:any = 
  {
      "firstName":"",
      "lastName":"",
      "userName":"",
      "password":"",
      "email":"",
      "address":"",
      "address2":"",
      "contactNumber":""
  }

  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }
  
    ngOnInit(): void {
        this.loadCountries();
    }

    // load country details
    loadCountries(){
        let api=" https://restcountries.com/v3.1/all";
        this.http.get(api).subscribe(res =>{
            console.log(res);
            this.countryList=res;
        })
    }

    setSelectedCountry(country:any){
      this.selectedCountry=country;
      this.selectedCountryCode = country.idd.root+country.idd.suffixes[0];
      
      console.log(this.selectedCountryCode);
      console.log(this.selectedCountry); 
    }

    submitNewUser() {
      console.log(this.newUser);
      if (this.newUser.firstName !== "" && this.newUser.lastName !== "" && this.newUser.userName !== "" && this.newUser.password !== "" && this.newUser.address !== "" && this.newUser.email !== "" && this.newUser.contactNumber !== "") {
        this.http.get(`http://localhost:8081/user/is-exists-username/${this.newUser.userName}`).subscribe((data)=>{
          this.registerUser(data);
        })
      }else{

        Swal.fire({
          title:"All Fields are required!",
          text:`please fill all required fields.`,
          icon:"error"
        })

      }
    }

    registerUser(isExistsUserName:any){
      if (!isExistsUserName) {
        this.isSaving = true;
        this.http.post("http://localhost:8081/user/add-user",this.newUser,{responseType:'text'}).subscribe((res)=>{
          
          
          Swal.fire({
            title:"User Saved !",
            text:`${this.newUser.userName} was saved successfully.`,
            icon:"success"
          })

          this.newUser.firstName = "";
          this.newUser.lastName = "";
          this.newUser.userName = "";
          this.newUser.password = "";
          this.newUser.email = "";
          this.newUser.address = "";
          this.newUser.address2 = "";
          this.newUser.contactNumber = "";
          this.loadCountries();
          this.isSaving = false;

        })
      }else{

        Swal.fire({
          title:"Username Exists !",
          text:`${this.newUser.userName} was already taken.`,
          icon:"error"
        })
        
      }
    }
    
}

