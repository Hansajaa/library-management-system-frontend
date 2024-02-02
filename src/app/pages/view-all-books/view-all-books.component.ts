import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit{
    private http: any;

    public bookList: any;

    constructor(public httpClient:HttpClient){
        this.http=httpClient;
    }
    ngOnInit(): void {
      this.loadBooks();
    }


    loadBooks(){
        this.http.get("http://localhost:8080/book/get").subscribe((data: any)=>{
           this.bookList=data;
           console.log(this.bookList);
        })
    }

    
}
