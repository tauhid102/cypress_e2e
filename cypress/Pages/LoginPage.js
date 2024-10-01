class login{
    loginLocators={
        email:"#input-email",
        passWord:"#input-password",
        loginbtn:"button[type='submit']"
    }
    enterEmail(email){
        cy.get(this.loginLocators.email).type(email)
    }
    enterPassword(password){
        cy.get(this.loginLocators.passWord).type(password)
    }
    loginBtn(){
        cy.get(this.loginLocators.loginbtn).click();
    }
}