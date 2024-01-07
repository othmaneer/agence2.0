import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(private router: Router, private loginService: LoginService, private snackBar: MatSnackBar,private formBuilder: FormBuilder) 
  {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      mdp: ['', Validators.required]
    });
  }

  username: string = '';
  mdp: string = '';
  exist : boolean | undefined;

  loginExist(): void { 
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const mdp = this.loginForm.value.mdp;
      
      this.loginService.verifyLogin(username, mdp)
          .subscribe((result: boolean) => {
            if (result) {
              // Login successful
              console.log('Login successful');
              this.showSnackBar('Login successful');
              this.router.navigate(['/main']);
            } else {
              // Login failed
              console.log('Login failed');
              this.showSnackBar('Login failed');
            }
          }, error => {
            // Handle error
            console.error('Error:', error);
          });
    
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

}
