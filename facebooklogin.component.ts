import {Component, OnInit} from '@angular/core';

declare const FB: any;// we have declared FB const so no error will come because of javascript 

@Component({
    selector: 'login',
    templateUrl: `
                   <div>
                        <button class="btn btn-lg btn-social btn-facebook" (click)="onFacebookLoginClick()">
                          <i class="fa fa-facebook fa-fw"></i>Sign in with Facebook
                        </button>
                   </div> 
                  `,
    
})
export class LoginComponent implements OnInit {
    token: any;
    loged: boolean = false;
    user = { name: 'Hello' };

    constructor() {
        FB.init({
            appId: '304***********', // enter you appId here
            cookie: false,  // enable cookies to allow the server to access
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.5' // use graph api version 2.5 
        });
    }

    onFacebookLoginClick() {
        FB.login(function(result) {
            this.loged = true;
            this.token = result;
        }, { scope: 'email' }); // here we have set scope to email.. you can choose your scope based on what you want to retrive from fb

        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
            console.log(response);//optional only to see output to check 

        });

    }

    statusChangeCallback(res) {
        if (res.status === 'connected') {
            // connect here with your server for facebook login by passing access token given by facebook
            console.log(res.authResponse.accessToken);
            console.log(res.authResponse.userID);
            localStorage.setItem("access_token", res.authResponse.accessToken);
            
            FB.api('/me?fields=id,name,first_name,last_name,email,picture.width(150).height(150)',// this is the graph api of fb
                function(result) {
                    if (result && !result.error) {
                        this.user = result; // storing all the response data of graph api in user object
                        console.log(this.user);
                        console.log(this.user.name);
                        localStorage.setItem("username", this.user.name);// i am storing the data to localstorage that i got from facebook.. optional to you 
                        localStorage.setItem("email", this.user.email);
                    } else {
                        console.log(result.error);
                    }
                });

        }
        else if (res.status === 'not_authorized') {
            console.log("you are not authorized");
        }
        else { }
    };

    ngOnInit() {


    }

}

