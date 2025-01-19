import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  baseurl = 'http://localhost:5001/api/';

  login(model: any) {
    this.http.post(this.baseurl + 'account/login', model);
  }
}
