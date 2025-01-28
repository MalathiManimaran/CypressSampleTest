

import {LoginPage} from './login_Page.cy'; //importing the class from login_Page.cy.js
const loginPage = new LoginPage(); //creating object of the class
describe('All Login Test',function () { //Test Suite 

    beforeEach(function () { //Before each test case it will navigate to the URL , will run for all test cases within the describe block
                             //to run for all test outside describe block use this before each above the describe block (test suite)
                             //can also use in the support files to run before all test cases
    cy.visit('https://opensource-demo.orangehrmlive.com/');
});

it('Invalid credential Test  1',function () {  //Test Case to skip use it.skip / to run only this test case use it.only
   const uname ="Admin";
   const password ="admin1234";

   loginPage.enterName(uname);
   loginPage.enterPassword(password);
   loginPage.clickLogin();
   cy.screenshot(password);
   cy.log("Successfully validated the invalid credentials" + uname + password);

});

it('Valid Login Test 2 ',function () {

   loginPage.enterName('Admin');
   loginPage.enterPassword('admin123');
   loginPage.clickLogin();
    cy.url().should('include', 'dashboard');
    cy.log("Successfully validated the login page");
    cy.screenshot(cy.url().should('include', 'dashboard'));
});
});