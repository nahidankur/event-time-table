import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [NzButtonModule, NzResultModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  router = inject(Router);
  goBackHome(): void {
    this.router.navigate(['']);
  }
}
