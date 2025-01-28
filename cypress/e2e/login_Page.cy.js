export class LoginPage{
    

        // Username input field
        usernameInput = '[name="username"]';

        // Password input field
       passwordInput = '[name="password"]';

        // Login button
        loginButton = '[type="submit"]';

        // Forgot your password link
        forgotPasswordLink = '[class="orangehrm-login-forgot"]';
    

    enterName(name){
        cy.get(this.usernameInput).type(name); 
    }
    enterPassword(password){
        cy.get(this.passwordInput).type(password);
      //to take screenshot 
    }   
    clickLogin(){
        cy.get(this.loginButton).click();
    }
}