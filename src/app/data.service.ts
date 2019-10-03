import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht: HttpClient) { }
 // http://192.168.3.112/user/create
  ge() {
    return this.ht.get('http://192.168.3.112:9738/user/get');
  }
  po(d) {
    return this.ht.post('http://192.168.3.112:9738/user/create', d);
  }
  de(d) {
    return this.ht.delete('http://localhost:3000/posts/' + d);
  }
  up(d) {
    return this.ht.put('http://localhost:3000/posts/' + d.id, d);
  }
}
