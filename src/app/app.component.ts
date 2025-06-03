import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en', 'fr', 'pt', 'zh']);
    const savedLang = localStorage.getItem('lang') || 'es';
    translate.setDefaultLang('es');
    translate.use(savedLang);
  }
}
