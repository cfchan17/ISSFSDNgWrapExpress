import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService, CookieText } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  cookies: CookieText[] = [];

  constructor(private fb: FormBuilder, private cookieSv: CookieService) { }

  ngOnInit() {
    this.form = this.fb.group({
      cookieCount: [1]
    });
  }

  async getCookies() {
    const count = parseInt(this.form.value['cookieCount']);
    this.cookies = await this.cookieSv.getCookies(count);
  }
}
