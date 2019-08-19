import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  firstUnText: string;
  secondUnText: string;  
  loading = false;
  results: any = 'empty';

  // http://localhost:5001/scraper-58e5f/us-central1/widgets/
  // https://us-central1-scraper-58e5f.cloudfunctions.net/widgets/

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.loading = true;

    // this.http.get(`https://us-central1-scraper-58e5f.cloudfunctions.net/widgets/posts/images/${this.firstUnText}`)
    this.http.get(`http://localhost:5001/scraper-58e5f/us-central1/widgets/posts/images/${this.firstUnText}`)
    .subscribe((res:any[]) => {
      this.results = res;
      this.loading = false;
       console.table(this.results)
    });

  }

  firstUn(evt) {
    this.firstUnText = evt.target.value;
  }
  
  secondUn(evt) {
    this.secondUnText = evt.target.value;
  }
}
