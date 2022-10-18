import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeTogglerService {

  constructor() { }
  defaultTheme() {
    document.documentElement.style.setProperty('--primary', 'hsl(209, 23%, 22%)');
    document.documentElement.style.setProperty('--bgprimary', 'hsl(207, 26%, 17%)');
    document.documentElement.style.setProperty('--bgsecondary', 'hsl(0, 0%, 98%)');
  }
  lightTheme() {
    document.documentElement.style.setProperty('--primary', 'hsl(209, 23%, 22%)');
    document.documentElement.style.setProperty('--bgprimary', 'hsl(207, 26%, 17%)');
    document.documentElement.style.setProperty('--bgsecondary', 'hsl(0, 0%, 98%)');
  }
}
