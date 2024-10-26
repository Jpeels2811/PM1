import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage  {

  constructor(private router: Router) { }

  goToCerrarSesion() {
    this.router.navigate(['/home']);
  }
}
