import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-borrowers',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './view-all-borrowers.component.html',
  styleUrl: './view-all-borrowers.component.css'
})
export class ViewAllBorrowersComponent implements OnInit{
  
  private http:HttpClient;
  public borrowerList:any;
  public selectedborrower:any;

  constructor(private httpClient:HttpClient){
      this.http=httpClient;
  }
  
  ngOnInit(): void {
    this.loadBorrowers();
  }

  loadBorrowers(){
    this.http.get("http://localhost:8081/borrower/get").subscribe((list)=>{
      console.log(list);
      this.borrowerList=list;
    })
  }

  setSelectedBorrower(borrower:any){
    this.selectedborrower=borrower;
  }

  deleteBorrower(){
    this.http.delete(`http://localhost:8081/borrower/delete/${this.selectedborrower.id}`).subscribe((response)=>{
      console.log(response);
      Swal.fire({
        title: "Deleted !",
        text: `${this.selectedborrower.firstName} is deleted `,
        icon: "success"
      });
      this.selectedborrower=null;
      this.loadBorrowers();
    })
  }

  updateBorrower(){
    let postApi="http://localhost:8081/borrower/add";  
      this.http.post(postApi,this.selectedborrower,{responseType:`text`}).subscribe((response)=>{
          console.log(response);
          Swal.fire({
            title: "Updated !",
            text: `Borrower ${this.selectedborrower.firstName} is Updated `,
            icon: "success"
          });
          this.loadBorrowers();
          this.selectedborrower=null;
      })
  }
}
