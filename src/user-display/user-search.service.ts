import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserSearchService {

  constructor(private http: HttpClient) { }

  getUserbyId(username:string){
    return this.http.get(
      `https://api.github.com/search/users?q=${username}`
    );
  }

}