import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  products:any;
  allProducts = []
  pageNumber = 0;
  totalRecordstoShow = 10;
  showmorehide = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((responseBody:any) => {
      console.log(responseBody);
      if(responseBody){
        this.allProducts = responseBody;
        this.products = responseBody.slice(0, this.totalRecordstoShow);
      }
    });

     
  }
  
  showmore(e:any){
    e.preventDefault();
    this.pageNumber = this.pageNumber+1;
    const nextSetRecords = this.allProducts.slice(this.pageNumber*this.totalRecordstoShow, (this.pageNumber*this.totalRecordstoShow)+10);
    //nextSetRecords.forEach()

    for (var nextSetRecord of nextSetRecords) {
      this.products.push(nextSetRecord)
    }
    
    if(this.products.length === this.allProducts.length){
      this.showmorehide = false;
    }

  }

  ngOnDestroy() {
 
  }

}
