import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('User is on the login page', function(){
    cy.visit('https://react-redux.realworld.io/')
    cy.get('a[href="#login"]').click()
})

When('User login with valid credentials', function(){
    cy.get('input[placeholder="Email"]').type('cypressdemo@gmail.com')
    cy.get('input[placeholder="Password"]').type('cypressdemo')
    cy.get('button[type="submit"]').click()
})

When('User click the article maker', function(){
    // cy.get('a[href="#@Maksim Esteban"').click({ multiple: true })
    cy.get('a[href="#@Maksim Esteban"').first().click()
})