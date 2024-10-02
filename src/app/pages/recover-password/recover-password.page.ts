import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage {

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
