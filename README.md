# angular2_facebooklogin
login to facebook using angular 2 with typescript 

this is the sample code of facebook login using angular 2 typescript..


## steps to use it are as follows:

###step 1:
add these to your index.html file of angular 2 project 
```
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/4.12.0/bootstrap-social.min.css" rel="stylesheet">
  <script src="//connect.facebook.net/en_US/sdk.js"></script>
```
   

###step 2: 
copy all the code of facebooklogin.component.ts file to file in your project where you want facebook login..

###step 3: 
use this code where you want to logout 
####1: first add this to constructor
      ```
       constructor() {
         FB.init({
            appId      : '3046************',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
           });
        }
     ```   
####2: then add this 
       ```
         logout() {
              FB.logout(function (response) {
                    FB.Auth.setAuthResponse(null, 'unknown');
                });
       ```         
####3:add this to html 
      ```
         <span> <a (click)="logout()"> logout </a></span> 
      ```   
