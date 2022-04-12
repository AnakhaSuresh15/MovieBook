import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from './Movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieBook';
  mTitle?: string;
  searchBox: string = "";
  year?: string;
  rated?: string;
  released?: string;
  runtime?: string;
  display: boolean = false;
  img?: string;
  constructor(private readonly http: HttpClient) { }
  searchFunc(){
    this.getUrl().subscribe((data: Movies) => {
      if(data.Response === "True"){
        this.mTitle = data.Title;
        this.img = data.Poster;
        this.year = data.Year;
        this.rated = data.Rated;
        this.released = data.Released;
        this.runtime = data.Runtime;
        this.display = true;
      }
    });
  }

  getUrl(){
    let url = 'http://www.omdbapi.com/?apikey=e5e07c78&t=' + this.searchBox;
    return this.http.get<Movies>(url);
  }
}

