import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private translate: TranslateService
    ) {
    this.translate.setDefaultLang('es');
    this.translate.use(this.currentLanguage);
    this.translate.addLangs(['es', 'en']);
    this.languages = this.translate.getLangs();
    console.log(this.currentLanguage)
  }

  currentLanguage: string = this.translate.getBrowserLang() ?? 'es';
  languages: string[] = [];

  changeLanguage(lang: string) {
    console.log(lang)
    this.translate.use(lang);
    localStorage.setItem('Language', lang)
  }
}
