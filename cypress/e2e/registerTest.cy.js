import registerPage from '../Pages/RegistrationPage';
const registerObj=new registerPage();
describe("My Registration suit",()=>{
    it('Registration',()=>{
        registerObj.openUrl()
        registerObj.enterFirstName("Adnan")
        registerObj.enterLastName("Ahmed")
        registerObj.enterEmail("adnan@gmail.com")
        registerObj.enterPassword("123456")
        registerObj.clickPlicy()
        registerObj.continue()
        cy.get("div[id='content'] h1").should('have.text','Your Account Has Been Created!')
    })
})