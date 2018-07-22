import { Component } from '@angular/core';

@Component({
	selector: 'app-form-handler',
	styleUrls: ['./app.component.css'],
	template: `
		<form>
		    <input type="email" placeholder="E-mail"
				#login
				(keyup.enter)="getLogin(login.value)"
				(blur)="getLogin(login.value)">
		    <i *ngIf=corectLogin class="fas fa-check success-symbol"></i>
		    <i *ngIf=!corectLogin class="fas fa-times error-symbol"></i>
		    <br>
		    <span [style.visibility] = "shomMsgWrongLogin ? 'visible' : 'hidden'" class="error-msg">Invalid Username</span>
		    <input [style.borderColor] = "correctPassword ? 'rgb(0, 138, 70)' : 'rgba(153,153,153, 0.28)' " type="password" placeholder="Password"
				#password
				(blur)="getPassword(password.value)">
		    <i *ngIf=correctPassword class="fas fa-check success-symbol"></i>
		   
		    <input type="button" value="Login" (click)="check()">
		    <p>Forgot your password? <a href="#">Reset it here.</a></p>
		</form>
	`
})

export class FormHandler{
	login = '';
	password = '';
	corectLogin = false;
	correctPassword = false;
	shomMsgWrongLogin = false;


	
	getLogin(login: string) { 
		this.login = login;
		this.shomMsgWrongLogin = false;
		this.correctPassword = false;
		var emailOrder = /\S+@\S+\.\S+/;
		if(emailOrder.test(login)) {
			this.corectLogin = true;
			console.log('email')
			}else{console.log('not email')};
	};

	getPassword(password: string) { 
		this.password = password;
	};
		 
	check(){ 
		if(this.login == 'designer@gmail.com'){
			if(this.password == 'password'){
				this.corectLogin = true;
				this.correctPassword = true;

		
			console.log('correct login, correct password')
			}else{console.log('wrong password')}
		}else{
			this.corectLogin = false;
			this.shomMsgWrongLogin = true;
			console.log('wrong login')};
	}
}