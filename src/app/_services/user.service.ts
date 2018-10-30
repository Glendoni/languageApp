﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { User, Language, Search, NativeOnline , ProfileObject, OfflineObject} from '../_models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient ) { }
    
      url = localStorage.getItem('host_api_url');

    
   
    
    
    
        /*
        
                <hr />
               <div class="row"> 
                    <div class="col-12"> 
                   
                    <h4 class="community_title_2">Live Native Users: (Qualified Teachers)</h4>      
            </div>
         
            <div *ngFor="let nativeOnline of nativeQualifieds.nativeQualified" class="col-xs-3 comunity_image_container">
                <p>
                    <img alt="community-user-image" class="community-img-circle" src="assets/img/user/{{ nativeOnline.profileimg}}">
                </p>
                <p class="profile_name">
                    {{ nativeOnline.name}}
                </p> 
                <button  type="button" class="btn btn-info profile_button" (click)="getUser(nativeOnline.id)" (click)="modalLg.show()">View</button>
            </div>
            </div>
           let httpOptions = {
            headers: new HttpHeaders({
            'Content-Type': 'application/text'
        }) 
        };
        return this.http.get<User[]>('http://127.0.0.1:8000/api/get-details'); OfflineObject
        */
    
    
    
    getUserProfile(id: number): Observable<ProfileObject[]>{
        
         return this.http.get<ProfileObject[]>(this.url+'/api/auth/users/'+id); 
    }
    
    getAll() {
        return this.http.get<User[]>(this.url+'/api/user');
    }

    getById(id: number) {
        return this.http.get(this.url+'/api/users/' + id);
    }

    create(user: User) {
        return this.http.post(this.url+'/api/auth/signup', user);
    }

    update(user: User) {
        return this.http.put(this.url+'/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.url+'/api/users/' + id);
    }
    
    getLanguage(){
        
         return this.http.get<Language[]>(this.url+'/api/user');
         return this.http.get<Language[]>(this.url+'/api/lang');


    }
    searchLanguage(term: string): Observable<Search[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
     return this.http.get<Language[]>(this.url+'/api/user');
    return this.http.get<Search[]>(`${this.url}/api/auth/search_lang?search_lang=${term}`).pipe(
     
        
        
        //tap(_ => this.log(`found heroes matching "${term}"`)),
      //catchError(this.handleError<Search[]>('searchHeroes', []))
    );
  }
    
   getNativeOnline(id: string) {
       
     return this.http.get(`${this.url}/api/auth/nativeOnline/`+id);

   }
     getNativeOffline(id: string): Observable<OfflineObject[]> {
       
     return this.http.get<OfflineObject[]>(`${this.url}/api/auth/nativeOffline/`+id);

   }
    
     getNativeQualified(id: string) {
       
     return this.http.get(`${this.url}/api/auth/nativeQualified/`+id);

   }
     getCommunityUserFullDetails(id: number) {
       
     return this.http.get(`${this.url}/api/auth/nativeOnline/fr`);

   }
    
    getPracticeFlags(){
       return this.http.get(`${this.url}/api/lang`);  
    }
    
    getRecentlyPracticed(){
        
         return this.http.get(`${this.url}/api/auth/recent_practices`); 
    }

}  
