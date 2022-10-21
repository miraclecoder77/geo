import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeTogglerService {

  constructor() { }
  darkTheme() {
    document.documentElement.style.setProperty('--primary', 'hsl(209, 23%, 22%)');
    document.documentElement.style.setProperty('--bgprimary', 'hsl(207, 26%, 17%)');
    document.documentElement.style.setProperty('--textprimary', 'hsl(0, 0%, 100%)');
    // document.documentElement.style.setProperty('','');
  }
  lightTheme() {
    document.documentElement.style.setProperty('--primary', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--bgprimary', 'hsl(0, 0%, 98%)');
    document.documentElement.style.setProperty('--textprimary', 'hsl(0, 0%, 52%)');
    // document.documentElement.style.setProperty('','');
  }
}
