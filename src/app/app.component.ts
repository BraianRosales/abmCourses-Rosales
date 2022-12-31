import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abmCourses-Rosales';
  showFiller = false;

  openClosed() {
    return this.showFiller ? this.showFiller = false : this.showFiller = true;
  }
}
