import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }
  
    ngOnInit(): void {
        this.loadCountries();
    }

    loadCountries(){
        let api=" https://restcountries.com/v3.1/all";
        this.http.get(api).subscribe(res =>{
            console.log(res);
            this.countryList=res;
        })
    }

    setSelectedCountry(country:any){
      this.selectedCountry=country;
      console.log(this.selectedCountry);
      
    }
}
