/// <reference types="cypress" />

before('visit app', () => {
    cy.visit('/');
    cy.url().should("contains", "gallery-app");
});

const faker = require("faker");

describe('register test', () => {

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randPassword: faker.internet.password(),
        

    }

    it('visit gallery app, register with assertations', () => {
        cy.visit('https://gallery-app.vivifyideas.com/register');

   

        cy.get('.form-control').eq(0).clear().type(userData.randomName);
        cy.get('.form-control').eq(1).clear().type(userData.randomName);
        cy.get('.form-control').eq(2).clear().type(userData.randomEmail);
        cy.get('.form-control').eq(3).clear().type(userData.randPassword);
        cy.get('.form-control').eq(4).clear().type(userData.randPassword);
        cy.get('.form-check-input').check();
        cy.get('.btn.btn-custom').click();
        
       
    });

    
    it('login with asertations', () => {

        cy.visit('https://gallery-app.vivifyideas.com/login');

      
    
        cy.get('.form-control').eq(0).type("nikola.zof@gmail.com");
        cy.get('.form-control').eq(1).type("dukenukem3d");
        cy.get('.btn.btn-custom').click();
    
    
    })

    it('create gallery with asertations', () => {

        cy.visit('https://gallery-app.vivifyideas.com/my-galleries');
        cy.get('.form-control').eq(0).type("nikola.zof@gmail.com");
        cy.get('.form-control').eq(1).type("dukenukem3d");
        cy.get('.btn.btn-custom').click();
        cy.wait(200);

        cy.get('.nav-link.nav-buttons').eq(0).click();
        cy.get('.nav-link.nav-buttons').eq(2).click();
        cy.get('.form-control').eq(0).clear().type(userData.randomName);
        cy.get('.form-control').eq(1).clear().type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"); 
        cy.get('.form-control').eq(2).clear().type('https://images.hdqwalls.com/wallpapers/2020-mortal-kombat-11-4k-ag.jpg');
        cy.contains('Add image');
     
      cy.contains('Submit').click();
    })



    
    
});


