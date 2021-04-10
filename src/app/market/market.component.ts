import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  products = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    alert("ghgfhgfhg............");

    // this.dataService.sendGetRequestToUrl(this.dataService.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
    //   console.log(res);
    //   this.products = res.body;
    // })
  }

  ngOnDestroy() {
    
    // Unsubscribe from the subject
    //this.dataService.unsubscribe();
  }

}
