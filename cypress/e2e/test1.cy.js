///<reference types="cypress" />
it('Google Search', () => {
  cy.visit('https://testautomationpractice.blogspot.com/');
  cy.url().should('contain', 'testautomationpractice');  //url contains testautomationpractice
  cy.get('.titlewrapper > .title').contains( 'Practice'); //visible text contains Practice in the title
  
  cy.get('#name').type('Cypress Name');
  cy.get('#email').type('Cypress Email');
  cy.get('#phone').type('=44 1234567890');
  cy.get('#textarea').type('Cypress Textarea');
  cy.get('#male').click();
  cy.get('#sunday').click();
  cy.get('#saturday').click();
  cy.get('#country').select('India');
  cy.contains('Green').click(); //click by visble text
  cy.get('#animals').select('Zebra'); //select by value
  cy.get('#datepicker').type('01/01/2025{Enter}'); //keyyboard shortcut enter
  cy.get('#txtDate').click();
  cy.get('.ui-datepicker-month').select('Feb');
  cy.get('.ui-datepicker-year').select('2025');
  cy.get(':nth-child(5) > :nth-child(5) > .ui-state-default').click();
  cy.wait(2000); //wait for 2 seconds
  cy.get('.submit-btn').click();
  //cy.get('#result').contains('You selected a range of' );
cy.log('Test case executed successfully');

    })