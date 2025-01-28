///<reference types="cypress" />
/* ///<reference types="cypress-downloadfile"/>   */  

it('File Upload and Download', function() {

    cy.visit('https://trytestingthis.netlify.app/'); //visit the website
    cy.get('#myfile').attachFile('example.json'); //upload the file example.json
   // cy.get('#myfile').attachFile('ss_Image.png'); //upload the file ss_Image.png
    
})

/* it('File Download', function() {    
     cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg'); //download the file example.json
 }) */