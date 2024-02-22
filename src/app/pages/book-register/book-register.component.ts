import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, DoCheck, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-book-register',
  standalone: true,
  imports: [HttpClientModule, FormsModule,CommonModule,RouterLink],
  templateUrl: './book-register.component.html',
  styleUrl: './book-register.component.css',
})
export class BookRegisterComponent{

  private http:HttpClient;

  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }

  book = 
  {
    isbn:null,
    title:null,
    author:null,
    category:null,
    qty:null,
  };
  
  isSaveButtonEnable:boolean=true;

  saveBook(){
    if(this.book.isbn !== null && this.book.title !== null && this.book.author !== null && this.book.category !== null && this.book.qty !== null){
      
      this.isSaveButtonEnable=false;
      let postApi="http://localhost:8080/book/add";
      this.http.post(postApi,this.book).subscribe(()=>{
          this.successfullAlert();
          this.book.isbn=null;
          this.book.title=null;
          this.book.author=null;
          this.book.category=null;
          this.book.qty=null;
          this.isSaveButtonEnable=true;
      })
    
    }else{

      this.warningAlert();
    
    }
  }

  successfullAlert(){
    Swal.fire({
      title: "Saved!",
      text: `${this.book.title} is saved`,
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
