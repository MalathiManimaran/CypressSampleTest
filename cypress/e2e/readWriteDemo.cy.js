///<reference types="cypress" />
before(function(){
    cy.fixture('example.json').as('test_data'); //reading the data from the fixture file example.json and aliasing it as test_data
})


it('Read file using fixture',function(){
cy.fixture('example.json').then((data)=>{ //reading the data from the fixture file example.json ,data is the alias name of the file
    cy.log(data.name); //logging the data from the fixture file
    cy.log(data.email);
    cy.log(data.body);})
    
    cy.log("*******Result from before function ********" +this.test_data.name ); //before function - reading the data from the fixture file using alias name
})

it('Read file using ReadFileFn', function() {
    cy.readFile('cypress/fixtures/example.json').then((data) => { 
        // reading the data from the fixture file example.json, data is the alias name of the file
        cy.log("*******Result using ReadFile function ********" + data.email);
    });
});

it('Write file using fixture', function() {
    const data = {
        // "name": "Cypress",
        // "email": "  ",
        // "body": "Cypress is a testing tool"
    };

    cy.writeFile('sample.txt', 'Write file example\n'); // writing the data to the file sample.txt
    cy.writeFile('sample.txt','Content written successfully',{flag:'a+'}); // writing the data to the file sample.txt with append mode
});