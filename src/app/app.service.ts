import { of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  get = (endpoint: string, tokenKey ?: any, token ?: any) => {
    let _headers = new HttpHeaders();
    let _httpHeaders : any;
    if(token && tokenKey) {
      _httpHeaders = _headers.append("Content-Type", "application/json").append(tokenKey, token);
    } else {
      _httpHeaders.append("Content-Type", "application/json");
    }
    return this.http.get(endpoint, { headers: _httpHeaders }).pipe(map(response => {
      return response;
    }));
  }

  post = (endpoint: string, data: any, tokenKey ?: any, token ?: any) => {
    let _headers = new HttpHeaders();
    let _httpHeaders : any;
    if(token && tokenKey) {
      _httpHeaders = _headers.append("Content-Type", "application/json").append(tokenKey, token);
    } else {
      _httpHeaders = _headers.append("Content-Type", "application/json");
    }
    return this.http.post(endpoint, data, { headers: _httpHeaders });
  }

  put = (endpoint: string, data: any, tokenKey ?: any, token ?: any) => {
    let _headers = new HttpHeaders();
    let _httpHeaders : any;
    if(token && tokenKey) {
      _httpHeaders = _headers.append("Content-Type", "application/json").append(tokenKey, token);
    } else {
      _httpHeaders = _headers.append("Content-Type", "application/json");
    }
    return this.http.put(endpoint, data, { headers: _httpHeaders });
  }

  delete = (endpoint: string, tokenKey ?: any, token ?: any) => {
    let _headers = new HttpHeaders();
    let _httpHeaders : any;
    if(token && tokenKey) {
      _httpHeaders = _headers.append("Content-Type", "application/json").append(tokenKey, token);
    } else {
      _httpHeaders = _headers.append("Content-Type", "application/json");
    }
    return this.http.delete(endpoint, { headers: _httpHeaders });
  }
}
