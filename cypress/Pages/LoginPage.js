class login{
    loginLocators={
        email:"#input-email",
        passWord:"#input-password",
        loginbtn:"button[type='submit']",
        assertTxt:"body main h2:nth-child(1)"
    }
    openUrl(){
        cy.visit('https://demo-opencart.com/index.php?route=account/login&language=en-gb')
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
    loginSuccess(txt){
        cy.get(this.loginLocators.assertTxt).should('contain',txt)
    }
}
export default login