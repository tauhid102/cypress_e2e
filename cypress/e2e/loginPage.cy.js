import loginPage from '../Pages/LoginPage';
import userData from '../fixtures/userData.json';
const loginObj=new loginPage();
describe('My Login suit',()=>{
    it('Login suit',()=>{
        loginObj.openUrl()
        loginObj.enterEmail(userData.userName)
        loginObj.enterPassword(userData.password)
        loginObj.loginBtn()
        loginObj.loginSuccess(userData.assertTxt)
    })
    it.only('Login suit',()=>{
        loginObj.openUrl()
        cy.login(userData.userName,userData.password)
        loginObj.loginSuccess(userData.assertTxt)
    })
})