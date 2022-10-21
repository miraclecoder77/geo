import { ThemeTogglerService } from './../shared/theme-toggler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  darkEl:boolean = false;
  lightEl:boolean = true;
  showFilter: boolean = false;

  constructor(private themeToggle:ThemeTogglerService) { }

  ngOnInit(): void {
  }

//  window.addEventListener('click', toggleTheme, false);

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

}
