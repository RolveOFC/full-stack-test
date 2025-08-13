import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punk-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punk-list.html',
  styleUrls: ['./punk-list.css']
})
export class PunkListComponent implements OnInit, OnDestroy {
  beers: any[] = [];
  page = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    document.body.classList.add('punk-list-bg');
    this.getBeers();
  }

  ngOnDestroy() {
    document.body.classList.remove('punk-list-bg');
  }

  getBeers() {
    this.http.get<any[]>(`https://punkapi.online/v3/beers?page=${this.page}`)
      .subscribe(data => {
        this.beers = data;
        console.log(this.beers); // Veja no console se image_url existe
      });
  }

  nextPage() {
    this.page++;
    this.getBeers();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.getBeers();
    }
  }
}
