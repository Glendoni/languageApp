import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormArray, Validator, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { AlertService, UserService } from '../../../_services';

import { User, Language, Search, NativeOnline, RootObject } from '../../../_models';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
    
nativeOnlines: RootObject[]; 
   native: any; 
    lang_flag;
    lang_id;
    user_profile= [];
    user_setting= [];
    languages = []  ;
    showmodal = false;
   constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                 private router: Router,
                 private userService: UserService) { }

   ngOnInit() {
       
     this.lang_id = this.route.snapshot.params.id
          this
              .userService
              .getNativeOnline(this.route.snapshot.params.id)
              .subscribe((data: RootObject[]) =>{
              if(data.nativeOnline.length >= 1){
                this.nativeOnlines = data;
               this.lang_flag = data.nativeOnline[0].description;
               // this.lang_id = data.nativeOnline[0].code;
                 // this.languages
              }
              
               //this.native.nativeOnline[0].description
            
              });
       
 
  }
    
            getUser(code: number){
                console.log(code);
                this.showmodal = true;
                this.user_profile = [];
            this.userService
                .getUserProfile(code)
                .subscribe(data => {
                           this.user_profile = data.data[0];
                            this.user_setting = data.data[0].settings[0];
                this.languages = data.data[0].languages ;
                
              
                })
               
   //this.router.navigate(['/community',code]);
   
}
    
  
      
}