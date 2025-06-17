import { Injectable } from '@angular/core';

export type Theme = 'cmyk' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private current: Theme = 'cmyk';

  constructor() {
    this.apply(this.current);
  }

  toggle() {
    this.current = this.current === 'cmyk' ? 'dark' : 'cmyk';
    this.apply(this.current);
  }

  private apply(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  get theme(): Theme {
    return this.current;
  }
}
