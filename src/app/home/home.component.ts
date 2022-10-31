import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ThemeTogglerService } from '../shared/theme-toggler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  darkEl:boolean = false;
  lightEl:boolean = true;
  showFilter: boolean = false;
  countryData:any = [];
  constructor(
    private themeToggle:ThemeTogglerService,
    private api:ApiService
  ) { }

  ngOnInit(): void {
    this.showCountry();
  }

  defaultTheme() {
    console.log('dark');
    this.darkEl = !this.darkEl;
    this.lightEl = !this.lightEl;
    this.themeToggle.darkTheme;
  }
  lightTheme() {
    console.log('theme');
    this.lightEl = !this.lightEl;
    this.darkEl = !this.darkEl;
    this.themeToggle.lightTheme
  }
  //show filter
  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  showCountry(){
    this.api.getCountries()
    .subscribe(
      (res) => {
        this.countryData = res;
        console.log(res);
      }
    )
  }

}
