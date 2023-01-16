import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  title = 'abmCourses-Rosales';
  showFiller = false;

  openClosed() {
    return this.showFiller ? this.showFiller = false : this.showFiller = true;
  }
}
